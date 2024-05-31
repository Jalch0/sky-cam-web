import { Roboto } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ActiveSectionContextProvider from "@/app/context/active-section-context";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: ["100" ,"300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky-Cam - Mobile Surveillance Trailers",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={roboto.className}>
      <ActiveSectionContextProvider>
        <Navbar />
        {children}
        <Footer />
        <Toaster position='top-right'/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
