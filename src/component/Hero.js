import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-8 text-4xl text-tulisan font-extrabold tracking-tight leading-relaxed md:text-5xl xl:text-6xl dark:text-tulisan">
            The kind of <span className="text-secon">furniture</span> you have
            been looking for
          </h1>
          <a
            href="#"
            className="mb-4 inline-flex items-center justify-center px-20 py-5 mr-3 text-base font-medium text-center text-bag rounded-lg bg-signup hover:bg-secon hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            SEARCH CATALOG
          </a>
          <a
            href="#"
            className="mb-4 inline-flex items-center justify-center px-20 py-5 text-base font-medium text-center text-bag border border-bag rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 18">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z"
              />
            </svg>
            WATCH VIDEOS
          </a>
        </div>
        <div className="-mb-6 lg:mt-5 lg:col-span-5 lg:flex">
          <figure className="relative">
            <a href="#">
              <img
                className="rounded-lg -mt-2"
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <button
                type="button"
                className="opacity-50 px-3 py-2 text-sm font-medium text-center inline-flex items-center text-black bg-white rounded-lg focus:outline-none dark:hover:bg-blue-700 ">
                $329
              </button>

              <p className="text-4xl mb-2">Pösht Sofa</p>
              <a
                href="#"
                className="-mb-4 inline-flex items-center justify-center px-2.5 pl-4 py-3 mr-3 text-xs text-center text-white rounded-lg bg-jumbotron2 hover:bg-secon hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                VIEW DETAILS
                <svg
                  className="w-2 h-2 ml-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;