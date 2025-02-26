import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "Created by Nontapan Chanadee",
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
