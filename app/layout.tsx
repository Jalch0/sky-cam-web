import { Roboto } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
