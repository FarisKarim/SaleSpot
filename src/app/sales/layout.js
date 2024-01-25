import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function SalesLayout({ children }) {
  return (
    <div className={`p-4`}>
      <div className="text-center text-3xl xs:text-xl font-bold p-4 underline">
        Ongoing Sales
      </div>
      <div className="lg:mx-24">
        {children} 
      </div>
    </div>
  );
}
