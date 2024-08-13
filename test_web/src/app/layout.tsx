import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { roboto } from "./UI/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App Talentum",
  description: "Prueba tecnica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
