import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";
import Link from "next/link";
import mainImage from "../../assets/mainHome.jpg";
import secondHomeImage from "../../assets/secondHome.jpg";
import thirHomeImage from "../../assets/thirdHome.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OCA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
