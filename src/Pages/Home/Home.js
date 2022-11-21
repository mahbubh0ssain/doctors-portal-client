import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs/ContactUs";
import DentalCare from "./DentalCare";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import ServiceCards from "./Services/ServiceCards";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Info></Info>
      <ServiceCards></ServiceCards>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
