import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navBar";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],       // required
  weight: ["400", "700"],   // choose the weights you need
});

export const metadata: Metadata = {
  title: "The B2 Foundation",
  description: "Building a better community together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className} >
        <Navbar />
        {children }
      </body>
    </html>
  );
}
