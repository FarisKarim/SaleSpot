"use client";
import React, { useState } from "react";

const PricingPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardClasses = (index) =>
    `relative z-10 flex flex-col items-center w-full p-4 mx-auto my-0 border border-4 ${
      selectedCard === index ? 'border-blue-600' : 'border-gray-200'
    } border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8 min-h-[300px]`; // Set a minimum height for the cards

  const features = {
    'Free': ['Updated weekly', 'Sales feed'],
    'Premium': ['Updated daily', 'Email notifications for new sales', 'Advanced filtering options', 'Rare sales'],
    'Premium+': ['Updated live', 'Info for re-stocks on rare items', 'Feature 3 for Plus']
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

        <div
          className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 dark:text-white border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 lg:grid-cols-3 grid-auto-rows:minmax(0, 1fr)" // Use grid-auto-rows for equal height
        >
          {['Free', 'Premium', 'Premium+'].map((plan, index) => (
            <div
              key={plan}
              onClick={() => setSelectedCard(index)}
              className={cardClasses(index)}
            >
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight border-0 border-gray-200 sm:text-3xl md:text-4xl">
                {plan}
              </h3>
              <div className="flex items-end mt-6 leading-7 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  ${index === 0 ? '0' : index === 1 ? '29' : '49'}
                </p>
                <p className="box-border m-0 border-solid">
                  / month
                </p>
              </div>
              <ul className="flex-1 p-0 mt-4 ml-5 leading-7 border-0 border-gray-200">
                {/* Features list can be dynamically generated as per your plan details */}
                {features[plan].map((feature, featureIndex) => (
                  <li key={featureIndex} className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center no-underline bg-green-600 text-white border rounded-md cursor-pointer hover:bg-green-700 hover:border-black focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg hover:scale-110 transition-transform"
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
