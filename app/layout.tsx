import { cn } from "@/lib/utils";
import { SiteConfig } from "@/site.config";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { QuoteModalProvider } from "./_landing/QuoteModal";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full dark">
      <head>
        <Script
          defer
          data-website-id="dfid_xPNqbWDvJnuHPch4GRVuL"
          data-domain="code-celeste.com"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "h-full font-sans antialiased"
        )}
      >
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
