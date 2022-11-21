import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="mb-5 mt-16"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="hero-content lg:py-0 sm:py-10  flex-col lg:flex-row gap-24">
          <img
            src={doctor}
            className="-mt-32 hidden lg:block lg:w-1/2 sm:w-full h-1/2 rounded-lg"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold text-primary mb-4 ">
              Appointment
            </h1>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-lg  text-white">
              It is a long established fact th at a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
