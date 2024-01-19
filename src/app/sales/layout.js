import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function SalesLayout({ children }) {
  return (
    <div className={`p-4s`}>
      <div className="text-center text-2xl font-bold p-4">
        Ongoing Sales
      </div>
      <div className="lg:mx-24">
        {children} {/* Specific page content in grid layout */}
      </div>
    </div>
  );
}
