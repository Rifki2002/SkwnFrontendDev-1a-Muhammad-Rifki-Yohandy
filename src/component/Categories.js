import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

function Categories() {
  
  return (
    <div className="py-18 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-4 m-6 gap-4">
        {/* Gambar 1 */}
        <div>
          <img
            className="rounded-lg mx-auto sm:mx-0"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://www.diningandlivingroom.com/wp-content/uploads/2016/03/10-Beautiful-Living-Room-Design-by-Marmol-Radziner_06.jpg"
          />
        </div>
        {/* Gambar 2 */}
        <div>
          <img
            className="rounded-lg mx-auto sm:mx-0"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://i.pinimg.com/originals/b7/55/53/b75553fb8495541e85bbdfe31426d41b.jpg"
          />
        </div>
        {/* Gambar 3 */}
        <div>
          <img
            className="rounded-lg mx-auto sm:mx-0"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://hips.hearstapps.com/hmg-prod/images/serena-williams-beverly-hills-mansion-29-1509659559.jpg?resize=480:*"
          />
        </div>

        {/* Accordion */}
        <div className="text-center sm:text-left">
          <p className="text-black font-semibold text-xl mt-6 mb-4">
            Categories
          </p>
          <p className="text-black font-bold text-5xl mb-10">
            Furniture Sets 
          </p>
          <AccordionItem
            title="Bedroom"
            content="Our finest sets of bedroom design for you to have a rest after a tiring day"
          />
          <AccordionItem
            title="Living Room"
            content="Enjoy a great living room aesthetics with your family Designs created for increased comfortability"
          />
          <AccordionItem
            title="Home Office"
            content="Work from home with our finest Home Office design sets to improve your productivity"
          />
          <AccordionItem
            title="Gaming Room"
            content="Have fun with our sets of gaming setup available for your gaming community"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;