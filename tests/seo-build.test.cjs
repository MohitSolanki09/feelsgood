// Run after npm run build: validate the actual prerendered HTML, not source strings.
/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS Node test, matching the existing test runner. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = '.next/server/app';
const origin = 'https://feelsgoodbrass.netlify.app';
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml.body'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 18);
assert.equal(new Set(urls).size, urls.length);
const titles = new Set(), descriptions = new Set();
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
for (const url of urls) {
  assert.ok(url.startsWith(origin + '/'));
  const route = new URL(url).pathname;
  const html = fs.readFileSync(path.join(root, route === '/' ? 'index.html' : route.slice(1) + '.html'), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title, `${route}: title missing`);
  assert.ok(title.includes('Feel Good Brass Industry'), `${route}: missing brand in title`);
  assert.ok(!titles.has(title), `${route}: duplicate title`); titles.add(title);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => m[0]);
  const meta = name => metas.filter(tag => attr(tag, 'name') === name || attr(tag, 'property') === name).map(tag => attr(tag, 'content'));
  assert.equal(meta('description').length, 1);
  const description = meta('description')[0];
  assert.ok(description && !descriptions.has(description), `${route}: duplicate/empty description`); descriptions.add(description);
  assert.ok(meta('robots').some(value => value.includes('index, follow')));
  assert.ok(!meta('robots').some(value => /noindex|nofollow/.test(value)));
  const canonicals = [...html.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(tag=>attr(tag,'rel')==='canonical');
  assert.equal(canonicals.length, 1); assert.equal(new URL(attr(canonicals[0], 'href')).href, url);
  for (const name of ['og:title','og:description','og:url','og:site_name','og:type','og:image','twitter:title','twitter:description','twitter:image']) assert.equal(meta(name).length, 1, `${route}: ${name}`);
  assert.equal(new URL(meta('og:url')[0]).href, url);
  assert.deepEqual(meta('twitter:card'), ['summary_large_image']);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${route}: expected one H1`);
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
  assert.ok(main, `${route}: main landmark missing`);
  let previousLevel = 0;
  for (const heading of main.matchAll(/<h([1-6])\b/g)) {
    const level = Number(heading[1]);
    assert.ok(level <= previousLevel + 1, `${route}: skipped heading level`);
    previousLevel = level;
  }
  for (const image of html.matchAll(/<img\b[^>]*>/g)) assert.notEqual(attr(image[0], 'alt'), undefined, `${route}: missing alt`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const businesses = schemas.filter(s=>s['@type']==='LocalBusiness');
  assert.equal(businesses.length,1);
  assert.equal(businesses[0].address.postalCode,'361004');
  assert.equal(businesses[0].email,'feelgoodbrass@gmail.com');
  assert.ok(!/aggregateRating|priceCurrency|"review"/.test(JSON.stringify(schemas)));
  const breadcrumbs = schemas.filter(s=>s['@type']==='BreadcrumbList');
  assert.equal(breadcrumbs.length, route==='/'?0:1);
  if(breadcrumbs.length) assert.equal(breadcrumbs[0].itemListElement.at(-1).item,url);
  for(const match of html.matchAll(/<a\b[^>]*>/g)) {
    const href=attr(match[0],'href');
    if(!href?.startsWith('/') || href.startsWith('//')) continue;
    const target=new URL(href,origin).pathname;
    assert.ok(urls.includes(origin+target)||target==='/company',`${route}: broken internal route ${href}`);
  }
  console.log(`PASS ${route}`);
}
const robots = fs.readFileSync(path.join(root,'robots.txt.body'),'utf8');
assert.match(robots,/User-Agent: \*/i); assert.match(robots,/Allow: \//);
assert.ok(robots.includes(`${origin}/sitemap.xml`));
console.log(`Validated ${urls.length} pages: metadata, canonical, H1, images, internal routes, JSON-LD, sitemap and robots.`);
