import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function SalesLayout({ children }) {
  return (
    <div className={`p-4s`}>
      <div className="bg-indigo-300 sm:w-full text-center text-gray-200 text-xl font-bold p-4">
        Ongoing Sales
      </div>
      <div className="my-16 mx-24">
        {children} {/* Specific page content in grid layout */}
      </div>
    </div>
  );
}
