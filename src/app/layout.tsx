import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mithril Zeppelin 117 Publishing",
  description: "Official author and publishing website.",
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
