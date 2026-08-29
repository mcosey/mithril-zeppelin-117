import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mithril Zeppelin 117 Publishing",
  description: "Stories of myth, epic fantasy, timeless tales, and worlds of meaning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
