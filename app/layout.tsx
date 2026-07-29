import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavya Agar — Software Engineer",
  description: "Building systems · Fueled by espresso · Shipping clean code",
};

// Restore the reader's saved edition (paper tint) before first paint, so it doesn't flash.
const themeInitScript = `(function(){try{var e=localStorage.getItem('ka-edition');if(e==='evening'||e==='sunday'){document.documentElement.setAttribute('data-edition',e);}}catch(err){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Libre+Caslon+Display&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=UnifrakturMaguntia&display=swap"
          rel="stylesheet"
        />
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
