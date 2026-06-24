// // src/app/layout.tsx

// import type { Metadata } from "next";
// import Header from "@/src/components/common/Header/Header";
// import Footer from "@/src/components/common/Footer/Footer";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Feel Good Brass Industry",
//   description: "Precision brass parts manufacturer",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/src/components/common/Header/Header";
import Footer from "@/src/components/common/Footer/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Feel Good Brass Industry",
  description: "Precision brass parts manufacturer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}