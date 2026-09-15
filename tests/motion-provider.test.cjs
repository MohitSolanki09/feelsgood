const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the actual provider effects with browser lifecycle boundaries mocked.
function harness(reduced = false) {
  const effects = [], instances = [], mutations = [], intersections = [];
  const listeners = new Set();
  const preference = {
    matches: reduced,
    addEventListener: (_, callback) => listeners.add(callback),
    removeEventListener: (_, callback) => listeners.delete(callback),
  };
  const element = (top) => {
    const classes = new Set();
    return { classes, getBoundingClientRect: () => ({ top }), classList: {
      add: (name) => classes.add(name), remove: (name) => classes.delete(name),
    } };
  };
  const elements = [element(100), element(1100)];
  const root = { dataset: {} };
  let active = 0, peak = 0;
  class Lenis {
    constructor(options) { this.options = options; this.destroyed = false; instances.push(this); peak = Math.max(peak, ++active); }
    stop() { this.stopped = true; }
    start() { this.stopped = false; }
    destroy() { assert.equal(this.destroyed, false); this.destroyed = true; active--; }
  }
  class MutationObserver {
    constructor(callback) { this.callback = callback; mutations.push(this); }
    observe() {}
    disconnect() { this.disconnected = true; }
  }
  class IntersectionObserver {
    constructor(callback) { this.callback = callback; this.targets = new Set(); intersections.push(this); }
    observe(element) { this.targets.add(element); }
    unobserve(element) { this.targets.delete(element); }
    disconnect() { this.targets.clear(); this.disconnected = true; }
  }
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync('src/components/common/MotionProvider.tsx', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(code, {
    exports,
    require: (name) => ({
      react: { useEffect: (effect) => effects.push(effect) },
      'next/navigation': { usePathname: () => '/' },
      lenis: { default: Lenis },
    })[name],
    window: { matchMedia: () => preference, innerHeight: 900, IntersectionObserver },
    document: { documentElement: root, querySelectorAll: () => elements },
    MutationObserver, IntersectionObserver,
  });
  exports.default();
  return {
    effects, instances, mutations, intersections, elements, root, listeners,
    active: () => active, peak: () => peak,
    reduce(value) { preference.matches = value; [...listeners].forEach((callback) => callback()); },
  };
}

test('single Lenis survives preference changes, menu locks, Strict Mode and cleanup', () => {
  const h = harness();
  let cleanup = h.effects[0]();
  assert.equal(h.active(), 1);
  assert.equal(h.instances[0].options.lerp, 0.1);
  assert.equal(h.instances[0].options.autoRaf, true);
  assert.equal(h.instances[0].options.syncTouch, false);
  assert.equal(h.instances[0].options.anchors, true);
  h.root.dataset.scrollLocked = 'true'; h.mutations[0].callback();
  assert.equal(h.instances[0].stopped, true);
  h.reduce(true); assert.equal(h.active(), 0);
  h.reduce(false); assert.equal(h.active(), 1);
  assert.equal(h.instances[1].stopped, true);
  h.root.dataset.scrollLocked = 'false'; h.mutations[0].callback();
  assert.equal(h.instances[1].stopped, false);
  cleanup(); cleanup = h.effects[0](); cleanup();
  assert.equal(h.active(), 0); assert.equal(h.peak(), 1);
  assert.equal(h.listeners.size, 0);
  assert.ok(h.mutations.every((observer) => observer.disconnected));
});

test('reduced motion on first mount creates no Lenis and leaves reveals visible', () => {
  const h = harness(true);
  const cleanup = h.effects.map((effect) => effect());
  assert.equal(h.instances.length, 0);
  assert.ok(h.elements.every((element) => element.classes.size === 0));
  cleanup.forEach((dispose) => dispose());
});

test('reveal skips initial viewport, reveals once, and cleans up on route changes', () => {
  const h = harness();
  const cleanup = h.effects[1]();
  assert.equal(h.elements[0].classes.size, 0);
  assert.equal(h.elements[1].classes.has('reveal-pending'), true);
  const observer = h.intersections[0];
  observer.callback([{ target: h.elements[1], isIntersecting: true }]);
  assert.equal(h.elements[1].classes.size, 0);
  assert.equal(observer.targets.size, 0);
  h.reduce(true);
  assert.ok(h.elements.every((element) => element.classes.size === 0));
  cleanup();
  assert.equal(h.listeners.size, 0);
  const cleanupNextRoute = h.effects[1](); cleanupNextRoute();
  assert.ok(h.intersections.every((entry) => entry.disconnected));
});
