import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";
const TestimonialCards = () => {
  const cardInfo = [
    {
      id: 1,
      img: people1,
      name: "Joseph Buttler",
      place: "California",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      img: people2,
      name: "Andrew Tate",
      place: "Michigan",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      img: people3,
      name: "Ben Foaks",
      place: "Derbyshire",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-8 my-3 mx-auto">
      {cardInfo.map((card) => (
        <TestimonialCard key={card.id} card={card}></TestimonialCard>
      ))}
    </div>
  );
};

export default TestimonialCards;
