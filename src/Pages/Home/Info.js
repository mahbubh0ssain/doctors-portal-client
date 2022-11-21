import React from "react";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import marker from "../../assets/icons/marker.svg";

const Info = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 my-3">
        <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl lg:flex items-center">
          <img className="pr-3" src={clock} alt="" />
          <div>
            <p className="text-white text-xl ">Opening Hours</p>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div className="bg-accent p-3 rounded-xl lg:flex items-center">
          <img className="pr-3" src={marker} alt="" />
          <div>
            <p className="text-white text-xl ">Visit our location</p>
            <p className="text-white">Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl lg:flex  items-center ">
          <img className="pr-3 " src={phone} alt="" />
          <div>
            <p className="text-white text-xl ">Contact us now</p>
            <p className="text-white">+8801735-826627</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
