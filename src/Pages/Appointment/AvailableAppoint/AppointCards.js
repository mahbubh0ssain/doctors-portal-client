import React from "react";

const AppointCards = ({ option, setTreatment }) => {
  const { name, price, slots } = option;
  return (
    <div className="card  bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "No slot available."}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available.
        </p>
        <small>Price: ${price}</small>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="appointModal"
            className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointCards;
