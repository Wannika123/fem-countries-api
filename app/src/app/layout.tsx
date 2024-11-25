import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/component/Header";

const nunitoSans = localFont({
  src: "./fonts/NunitoSans.woff2",
  variable: "--font-nunito-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Countries",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={`${nunitoSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
