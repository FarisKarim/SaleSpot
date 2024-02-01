import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function SalesLayout({ children }) {
  return (
    <div className="p-4 text-center"> {/* text-center added here */}
      <a className="inline-block border border-black dark:border-white shadow-lg px-4 py-2 rounded-lg hover:scale-110 transition-transform text-3xl xs:text-xl font-semibold p-4 mx-auto">
        Ongoing Sales
      </a>
      <div>{children}</div>
    </div>
  );
}
