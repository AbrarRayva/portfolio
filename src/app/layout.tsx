import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Muhammad Abrar Rayva",
  description: "Muhammad Abrar Rayva's Personal Webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
