import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const sourceCode= Source_Code_Pro({
	weight: ["200","300","400","500","600", "700","800","900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const ibmPlex= IBM_Plex_Sans({
	weight: ["100","200", "300","400","500","600","700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
export const metadata: Metadata = {
	title: 'Aditi Bindal',
	description: 'DevRel | Developer | Web3 | AI',
  }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VCDCCWR94X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VCDCCWR94X');
          `}
        </Script>
      </head>
      <body className={ubuntu.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
