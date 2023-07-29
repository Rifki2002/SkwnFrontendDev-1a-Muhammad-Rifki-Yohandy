import React from "react";

function Content() {
  return (
    <section className="bg-jumbotron2 dark:bg-gray-900 text-center">
      <div className="py-20 px-20  lg:py-16">
        <p className="mb-6 text-lg font-normal text-signup lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          WHY CHOOSE US?
        </p>
        <h1 className="mb-8 text-4xl font-extrabold leading-none text-signup md:text-5xl lg:text-6xl dark:text-white">
          We care about details and the quality of our products
        </h1>
        <div className="px-32 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex">
            <p className="flex items-center mb-3 text-signup font-bold dark:text-gray-400">
              <button
                type="button"
                className="text-white bg-btjb focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:focus:ring-blue-800">
                <svg
                  className="w-3 h-3 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              MANUFACTURED WITH QUALITY MATERIALS
            </p>
          </div>
          <div className="flex">
            <p className="flex items-center mb-3 text-signup font-bold dark:text-gray-400">
              <button
                type="button"
                className="text-white font-bold bg-btjb focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:focus:ring-blue-800">
                5
              </button>
              5 YEARS OF WARRANTY FOR EACH PROFUCT
            </p>
          </div>
          <div className="flex">
            <p className="flex items-center mb-3 text-signup font-bold dark:text-gray-400">
              <button
                type="button"
                className="text-white bg-btjb focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:focus:ring-blue-800">
                <svg
                  className="w-3 h-3 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
                  />
                </svg>

                <span className="sr-only">Icon description</span>
              </button>
              20 YEARS OF EXPERTISE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;