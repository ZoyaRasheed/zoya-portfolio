import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteSettings } from "@/config/settings";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: siteSettings.site.title,
  description: siteSettings.site.description,
  keywords: siteSettings.site.keywords,
  author: siteSettings.site.author,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
