import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html>
      <body className={`${inter.className} flex flex-col min-h-screen landing-page dark:bg-black`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
