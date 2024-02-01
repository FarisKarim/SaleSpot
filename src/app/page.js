import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex justify-center p-8 xs:mx-0 mx-24">
        <Hero />
        {/* <div>Hello</div> */}
      </main>
      <div className="flex justify-center items-center py-4 mb-4">
        <h2 className="sm:text-2xl md:text-4xl  xs:mx-8 font-bold leading-tight ">
          Stay notified of sales from your favorite brands
        </h2>
      </div>

      <div className="carousel xs:w-full">
        <div className="carousel-track flex xs:flex-col lg:flex-row justify-around text-lg mb-20 px-10 gap-10">
          <div className="card bg-gray-200 p-4 py-12 my-4 xs:w-full w-1/3 border border-black flex items-center justify-center rounded-lg hover:scale-110 transition-transform">
            <Image src="/nike.png" alt="Nike" width={150} height={150} />
          </div>
          <div className="card landing-page p-4 py-12 my-4 xs:w-full w-1/3 border border-black flex items-center justify-center rounded-lg hover:scale-110 transition-transform">
            <Image src="/adidas.png" alt="Adidas" width={150} height={150} />
          </div>
          <div className="card bg-gray-100 p-4 my-4 py-12 xs:w-full w-1/3 border border-black flex items-center justify-center rounded-lg hover:scale-110 transition-transform">
            <Image
              src="/northface.png"
              alt="North Face"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </>
  );
}
