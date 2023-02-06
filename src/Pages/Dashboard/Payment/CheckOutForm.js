import React, { useEffect, useState } from "react";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

const CheckOutForm = ({ data }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [txid, setTxid] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, userName, _id } = data;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: userName,
            email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        txid: paymentIntent.id,
        price,
        email,
        bookingId: _id,
      };
      fetch(`${process.env.REACT_APP_SERVER_URL}/paymentInfo`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setTxid(paymentIntent.id);
            toast.success(`Your txd id is ${paymentIntent.id}`);
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <small>{cardError}</small>
      <button
        className="btn btn-xs btn-primary m-3"
        type="submit"
        disabled={!stripe || !clientSecret || txid}
      >
        {txid ? "Paid" : "Pay"}
      </button>
    </form>
  );
};

export default CheckOutForm;
