import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name NEEDED - CV",
  description: "Professional CV and Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
