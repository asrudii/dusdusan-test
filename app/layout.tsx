import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AntdWrapper from "@/config/antd-wrapper";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/index.scss";

const neoSansPro = localFont({
  src: "./fonts/NeoSansPro.woff",
  variable: "--font-neo-sans-pro",
  weight: "100 500 600 700 900",
});

export const metadata: Metadata = {
  title:
    "Komunitas Bisnis Reseller Dropship Online #1 di Indonesia | DUSDUSAN.COM",
  description:
    "Dusdusan.com - Platform Komunitas Bisnis Reseller Dropship Online, Supplier Grosir, serta belajar banyak hal positif yang dapat meningkatkan bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neoSansPro.variable} antialiased`}>
        <AntdWrapper>
          <div className="layout-wrapper">
            <Header />
            <main className="content-container">{children}</main>
            <Footer />
          </div>
        </AntdWrapper>
      </body>
    </html>
  );
}
