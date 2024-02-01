import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaleSpot",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Navbar />
          <div className="background">
            <span></span>
            <span></span>
          </div>
          <div>{children}</div>
          <Footer />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
