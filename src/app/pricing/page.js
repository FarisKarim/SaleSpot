"use client";
import React from "react";

const PricingPage = () => {
  const features = {
    Free: ["Updated daily", "Basic filtering options", "Access to some sales"],
    Premium: [
      "Updated live",
      "Email notifications for new sales",
      "Advanced filtering options",
      "Rare sales",
      "Info for re-stocks on rare items",
      "Early access to sales",
      "Access to all sales",
    ],
  };
  return (
    <section className="py-6 leading-7 text-gray-900 sm:py-12 md:py-16">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
          <h2
            id="pricing"
            className="box-border m-0 text-3xl xs:text-lg font-semibold leading-tight tracking-tight dark:text-white border-solid lg:text-4xl"
          >
            Upgrade for more benefits!
          </h2>
          <p className="box-border mt-2 text-xl dark:text-white border-solid sm:text-2xl">
            Choose the best plan that fits your needs.
          </p>
        </div>

        <div className="flex xs:flex-col xs:items-center sm:flex-row justify-center gap-10">
          {Object.entries(features).map(([plan, planFeatures], index) => (
            <div
              key={plan}
              className={`flex flex-col py-2 items-center w-8/9 md:w-1/3 my-4 border-4 ${
                plan === "Premium" ? "border-purple-600" : "border-gray-200 bg-gray-500"
              } border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8 hover:scale-110 transition-transform`}
            >
              <h3 className="text-2xl font-semibold mb-4 tracking-tight sm:text-3xl md:text-4xl dark:text-white">
                {plan}
              </h3>
              <div className="flex items-end mt-1">
                <p className="m-0 text-6xl font-semibold leading-none border-solid dark:text-white">
                  ${plan === "Free" ? "0" : "14"}
                </p>
                <p className="box-border m-0 border-solid dark:text-white">
                  / month
                </p>
              </div>
              <ul className="flex-1 mt-4">
                {planFeatures.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="inline-flex justify-center w-full mb-2 dark:text-white font-semibold border-solid"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-flex justify-center w-1/2 px-4 py-2 mt-4 font-sans text-sm leading-none text-center no-underline rounded-lg cursor-pointer hover:scale-110 transition-transform ${
                  plan === "Free"
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 hover:border-black focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white"
                }`}
                onClick={(e) => {
                  if (plan === "Free") {
                    e.preventDefault();
                  }
                  // Add additional logic for handling the click event if necessary
                }}
              >
                Purchase
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
