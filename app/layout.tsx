import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";
import { GoogleAnalytics } from '@next/third-parties/google'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={ubuntu.className}>
        {children}
        <GoogleAnalytics gaId="G-VCDCCWR94X" />
      </body>
    </html>
  );
}

