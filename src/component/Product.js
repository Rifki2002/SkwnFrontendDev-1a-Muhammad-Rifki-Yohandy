import React, { useState, useEffect } from "react";

function Products() {
  const images = [
    "https://i.pinimg.com/originals/94/e0/97/94e0974d85626bf03c24c690a17c95a1.jpg",
    "https://www.mascheroni.it/ContentsFiles/mascheroni_divani_e_poltrone_bellini_gallery-aggiuntive_2_zoom.jpg",
    "https://i.pinimg.com/originals/3e/49/d3/3e49d35af6408144df269b1d9fc9b9c9.png",
    "https://th.bing.com/th/id/R.19c3e3a4cb077badb46bb727d4f84e1b?rik=oHryIhc9y1jUIw&riu=http%3a%2f%2fwww.urbanlux.co.uk%2fblog%2fwp-content%2fuploads%2f2013%2f04%2f32.jpg&ehk=pXalggZZZdTskpFCU9rOnqM6JYqeDu7D2wrG5tI9e2Q%3d&risl=&pid=ImgRaw&r=0",
    "https://i.pinimg.com/736x/03/4c/fe/034cfe78baed751d071791adcb6994ff.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const slideDuration = 1000; //  milliseconds for slide animation
  const visibleImages = 3;

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 3000); // Auto slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const descriptions = [
    "Und Chair",
    "Sofa Und",
    "Comfort Chair",
    "Amazing Sofa",
    "Limited Edition",
  ];

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setTranslateX(-100);
    setTimeout(() => setTranslateX(0), 10); // Set timeout for instant transition
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTranslateX(100);
    setTimeout(() => setTranslateX(0), 10); // Set timeout for instant transition
  };

  const getImagesToShow = () => {
    const imagesToShow = [];
    const startIndex =
      currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;

    for (let i = 0; i < visibleImages; i++) {
      const index = (startIndex + i) % images.length;
      imagesToShow.push(images[index]);
    }

    return imagesToShow;
  };

  return (
    <section className="bg-jumbotron2 dark:bg-gray-900 text-center">
      <div className="py-20 px-20 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2 text-left">
            <p className="-ml-8 mb-6 text-lg font-normal text-signup lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              OUR PRODUCTS
            </p>
            <h1 className="mb-8 text-left md:text-center text-4xl font-extrabold leading-none text-signup md:text-5xl lg:text-6xl dark:text-white">
              This month's best seller
            </h1>
          </div>
          <div className="md:col-span-1 flex justify-end items-center">
            <button
              type="button"
              className="text-bag bg-signup hover:bg-secon hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              SEE MORE
            </button>
          </div>
        </div>

        {/* ini bagian carousel */}
        <div className="flex flex-wrap justify-center">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: `${slideDuration}ms ease-in-out`,
                width: `${images.length * 100}%`,
              }}>
              {getImagesToShow().map((imageUrl, index) => (
                <figure
                  key={index}
                  className={`relative max-w-sm transition-all duration-300 m-4 ${
                    index === 1 ? "scale-110" : "scale-100"
                  }`}>
                  <a href="#">
                    <img
                      className="rounded-lg"
                      src={imageUrl}
                      alt="image description"
                    />
                  </a>
                  <figcaption
                    className="absolute px-4 text-lg text-white bottom-6"
                    style={{
                      display: index === 1 ? "block" : "none",
                    }}>
                    <button
                      type="button"
                      className="opacity-50 -ml-6 mb-2 px-3 py-2 text-sm font-medium text-center inline-flex items-center text-black bg-white rounded-lg focus:outline-none dark:hover:bg-blue-700 ">
                      $329
                    </button>
                    <p className="text-black font-bold">
                      {descriptions[(currentIndex + index) % images.length]}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={goToPrevSlide}
              data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-signup/90 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-bag dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={goToNextSlide}
              data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-signup/90 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-bag dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1l4 4-4 4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;