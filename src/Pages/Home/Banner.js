import React from "react";
import BannerImg from "../../assets/images/chair.png";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import bg from "../../assets/images/bg.png";
const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div
          className="hero-content flex-col lg:flex-row-reverse"
          style={{
            background: `url(${bg})`,
            "background-position": "center",
            "background-repeat": "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            src={BannerImg}
            className="lg:w-1/2 sm:w-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>Getting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
