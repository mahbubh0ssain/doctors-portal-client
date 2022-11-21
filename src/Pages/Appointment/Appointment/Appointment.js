import React, { useState } from "react";
import AppointBanner from "../AppointBanner/AppointBanner";
import AvailableAppoint from "../AvailableAppoint/AvailableAppoint";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="px-14">
      <AppointBanner date={date} setDate={setDate}></AppointBanner>
      <AvailableAppoint date={date}></AvailableAppoint>
    </div>
  );
};

export default Appointment;
