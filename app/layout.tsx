import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Snowfall } from "@/components/news/Snowfall";

export const metadata: Metadata = {
  title: "Kavya Agar — Software Engineer",
  description: "Building systems · Fueled by espresso · Shipping clean code",
};

// Restore the reader's saved edition (paper tint) before first paint, so it doesn't flash.
// Also sets the seasonal skin: Christmas all of December. `?season=christmas` previews it any time of
// year, `?season=off` turns it off (both remembered in localStorage['ka-season'] until the other is used).
const themeInitScript = `(function(){var d=document.documentElement;try{var e=localStorage.getItem('ka-edition');if(e==='evening'||e==='sunday'){d.setAttribute('data-edition',e);}}catch(err){}try{var q=new URLSearchParams(location.search).get('season');if(q==='christmas'||q==='off'){localStorage.setItem('ka-season',q);}var o=localStorage.getItem('ka-season');var on=o==='christmas'||(o!=='off'&&new Date().getMonth()===11);if(on){d.setAttribute('data-season','christmas');}}catch(err){}})();`;

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
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Libre+Caslon+Display&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Playfair+Display:wght@900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <Snowfall />
        {children}
      </body>
    </html>
  );
}
