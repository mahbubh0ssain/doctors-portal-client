import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();

  const { selectedDate, treatmentName, slot, price } = data;

  return (
    <div>
      <h3 className="text-3xl">Payment</h3>
      <p>
        Please pay <strong> ${price} </strong> for your appointment{" "}
        {treatmentName} on {selectedDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
