import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section
      className="mt-40 py-16 mx-auto"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center">
        <h3 className="text-xl font-bold mb-3 text-white">
          Stay connected With Us
        </h3>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-1/4 mb-4"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-1/4 mb-4"
        />
        <br />
        <textarea
          className="textarea textarea-bordered w-1/4"
          placeholder="Bio"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default ContactUs;
