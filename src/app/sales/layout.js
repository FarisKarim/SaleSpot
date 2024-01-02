import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function SalesLayout({ children }) {
  return (
    <div className={`my-8 p-4s`}>
      <div className="bg-blue-500 text-center text-white text-xl font-bold p-4">
        Big Clothing Brand Sales Going On
      </div>
      <div className="my-24">
        {children} {/* Specific page content in grid layout */}
      </div>
    </div>
  );
}
