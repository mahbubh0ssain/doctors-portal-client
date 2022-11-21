import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M6760DGzIBPkB4GPjLEqa79J3r1usKCA5qKm3bRE7VDlrPEQSirNYmhXBz5NOUIweLDh0ItBsQt17CvVkVcaxMq00oumfL54S"
);

const Payment = () => {
  const data = useLoaderData();
  const { selectedDate, treatmentName, slot, price } = data;
  console.log(data);
  return (
    <div>
      <h3 className="text-3xl">Payment</h3>
      <p>
        Please pay <strong> ${price} </strong> for your appointment{" "}
        {treatmentName} on {selectedDate} at {slot}
      </p>
    </div>
  );
};

export default Payment;
