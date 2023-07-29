import React from "react";

function Deals() {
  return (
    <section className="bg-section3 dark:bg-gray-900 text-center">
      <div className="py-20 px-20 lg:py-16 text-jumbotron2">
        <p className="sm:text-left mb-6 text-jumbotron2 font-normal lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          LIMITED DEALS
        </p>
        <h1 className="mb-8 sm:ml-48 sm:text-left text-4xl font-extrabold text-jumbotron2 leading-none md:text-5xl lg:text-6xl dark:text-white">
          Become a member and get 10% off of your first purchase
        </h1>

        <div className="flex sm:ml-48">
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-l-md bg-gray-50 border border-gray-300 text-bag focus:ring-bag focus:border-bag flex-grow min-w-0 max-w-md text-sm p-2.5 h-14 w-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email here"
          />
          <span className="flex-shrink-0 inline-flex items-center px-3 text-sm text-gray-900 bg-signup border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-bag dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Deals;