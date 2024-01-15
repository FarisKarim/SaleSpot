import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function SalesLayout({ children }) {
  return (
    <div className={`p-4s`}>
      <div className="bg-indigo-300 rounded-lg mx-24 text-center text-black text-xl font-bold p-4">
        Ongoing Sales
      </div>
      <div className="my-16 mx-24">
        {children} {/* Specific page content in grid layout */}
      </div>
    </div>
  );
}
