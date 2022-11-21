import React from "react";
import quote from "../../../assets/icons/quote.svg";
import TestimonialCards from "./TestimonialCards";
const Testimonial = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-between items-center mb-20">
        <div>
          <h4 className="text-primary text-bold text-xl mb-3">Testimonial</h4>
          <h4 className=" text-bold text-3xl">What Our Patient Says</h4>
        </div>
        <img className="h-48" src={quote} alt="" />
      </div>
      <TestimonialCards></TestimonialCards>
    </section>
  );
};

export default Testimonial;
