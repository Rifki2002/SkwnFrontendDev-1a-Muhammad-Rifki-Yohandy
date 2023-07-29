import React from "react";

function Partner() {
  return (
    <div className="bg-section3 grid grid-cols-1 gap-6 sm:grid-cols-5 py-20 px-20 lg:py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-tulisan text-l font-normal text-center">
          <span className="font-extrabold text-7xl">25+</span>
          <p className="mt-2">PARTNERED BRANDS</p>
        </p>
      </div>
      <div className="flex items-center justify-center mb-3 text-gray-500 dark:text-gray-400">
        <img
          alt=""
          style={{ width: "150px", height: "55px" }}
          src="https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2022/07/23365/Gusto_Logo_full_berry.5826310d71338.png"
        />
      </div>
      <div className="flex items-center justify-center mb-3 -mt-1.5 text-gray-500 dark:text-gray-400">
        <img
          alt=""
          style={{ width: "150px", height: "60px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
        />
      </div>
      <div className="flex items-center justify-center mb-3 mt-1 text-gray-500 dark:text-gray-400">
        <img
          alt=""
          style={{ width: "200px", height: "60px" }}
          src="https://cdn.cdnlogo.com/logos/t/67/treehouse.svg"
        />
      </div>
      <div className="flex items-center justify-center mb-3 text-gray-500 dark:text-gray-400">
        <img
          alt=""
          style={{ width: "150px", height: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Upwork_Logo.svg/1200px-Upwork_Logo.svg.png"
        />
      </div>
    </div>
  );
}

export default Partner;