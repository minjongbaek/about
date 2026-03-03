import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "백민종 | Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-4xl antialiased">{children}</body>
    </html>
  );
}
