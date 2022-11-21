import React from "react";

const TestimonialCard = ({ card }) => {
  const { name, img, text, place } = card;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center ">
          <p>{text}</p>
        </div>
        <div className="flex pl-10 pb-10 items-center">
          <div className="avatar mr-4">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt="" src={img} />
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">{name}</p>
            <p>{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
