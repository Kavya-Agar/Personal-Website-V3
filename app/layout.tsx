import type { Metadata } from "next";
import "./globals.css";
import { ThemeGallery } from "@/components/ThemeGallery";
import { themes } from "@/lib/themes";

export const metadata: Metadata = {
  title: "Kavya Agar — CS @ Texas A&M",
  description: "Building systems · Fueled by espresso · Shipping clean code",
};

// Serialized theme vars for the anti-FOUC inline script.
// Runs before React hydrates so the saved theme is applied immediately.
const themeVarsJson = JSON.stringify(
  Object.fromEntries(Object.entries(themes).map(([id, t]) => [id, t.vars]))
);

const themeInitScript = `(function(){try{var id=localStorage.getItem('ka-theme');var vars=${themeVarsJson};var t=vars[id];if(t){var r=document.documentElement;for(var k in t)r.style.setProperty(k,t[k]);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Restore theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <ThemeGallery />
        {children}
      </body>
    </html>
  );
}
