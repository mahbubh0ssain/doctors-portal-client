import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Modal = ({ treatment, date, setTreatment, refetch }) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext);

  const selectedDate = format(date, "PP");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookingInfo = {
      selectedDate,
      treatmentName: name,
      userName: form.name.value,
      slot: form.slot.value,
      email: form.email.value,
      phone: form.phone.value,
      price,
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/bookings`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.acknowledged) {
          toast.success("Booking confirmed.");
          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="appointModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form onSubmit={handleSubmit} className=" grid grid-cols-1 gap-4">
            <input
              type="text"
              defaultValue={selectedDate}
              disabled
              placeholder="Type here"
              className="input input-bordered input-sm w-full "
            />
            <select
              name="slot"
              className="select select-bordered select-sm w-full"
            >
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              defaultValue={user?.displayName}
              placeholder="Your name"
              className="input input-bordered input-sm w-full "
            />
            <input
              name="email"
              disabled
              defaultValue={user?.email}
              type="email"
              placeholder="Your email"
              className="input input-bordered input-sm w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Your phone"
              className="input input-bordered input-sm w-full "
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary w-full "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
