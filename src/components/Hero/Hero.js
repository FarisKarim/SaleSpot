import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              The one spot to find where to shop
            </h1>
            <p className="py-5 text-xl leading-normal text-black-500 lg:text-xl xl:text-2xl dark:text-black-300">
              SaleSpot curates ongoing brand sales from all over the Internet so
              you don't have to. View brand sales from your favorite clothing brands
              in one place!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
            href="/sales"
            className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-indigo-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:scale-110 transition-transform"
          >
            View current sales
            <svg
              className="rtl:rotate-180 w-6 h-6 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/bluehero.png"
              width="500"
              height="500"
              className={"object-cover"}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Hero;
