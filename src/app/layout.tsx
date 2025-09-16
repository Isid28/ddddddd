import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnergyPal - Hedge Your Energy Bills with Renewable Power",
  description: "Buy clean energy directly from producers. No grid fees. No markups. Just savings. Join the future of renewable energy trading.",
  keywords: "renewable energy, solar energy, energy trading, hedge energy bills, clean energy marketplace",
  openGraph: {
    title: "EnergyPal - Renewable Energy Marketplace",
    description: "Buy clean energy directly from producers. No grid fees. No markups. Just savings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false,
                  includedLanguages: 'da,de,es,fr,it,nl,no,sv,fi,pl,pt,ru,zh,ja,ko,ar,hi',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="google_translate_element" style={{position: 'fixed', top: '10px', right: '10px', zIndex: 1000, background: 'rgba(0,0,0,0.8)', padding: '5px', borderRadius: '5px'}}></div>
        {children}
      </body>
    </html>
  );
}
