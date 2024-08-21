import type { Metadata } from "next";
import { Dancing_Script, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets:['latin'],
  variable: '--font-dancing-script'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const playfairDisplay = Playfair_Display({
  subsets:['latin'],
  variable: '--font-playfair-display'
})

export const metadata: Metadata = {
  title: "Amure",
  description: "A Chick and Boss Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${montserrat.variable} ${playfairDisplay.variable}`}>
      <body className="font-secondary">{children}</body>
    </html>
  );
}
