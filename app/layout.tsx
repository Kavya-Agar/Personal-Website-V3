import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavya Agar — CS @ Texas A&M",
  description: "Building systems · Fueled by espresso · Shipping clean code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
