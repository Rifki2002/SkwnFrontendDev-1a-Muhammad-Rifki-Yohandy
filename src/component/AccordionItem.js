import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-3 text-black dark:text-gray-400">
      <button
        type="button"
        className={`flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-signup dark:focus:ring-signup dark:border-gray-700 dark:text-gray-400 ${
          isOpen ? "bg-signup dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 shrink-0 ${isOpen && "-mr-0.5 rotate-180"}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;