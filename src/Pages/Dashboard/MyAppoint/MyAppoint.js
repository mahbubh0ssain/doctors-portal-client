import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppoint = () => {
  const { user } = useContext(AuthContext);

  const paid = "paid";
  const Paynow = "Pay now";
  const { data = [] } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-nu-eight.vercel.app/booking?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl mb-5">
        Appointments of
        <span className="text-blue-600"> {user.displayName}</span>
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((info, i) => (
              <tr key={info._id}>
                <th>{i + 1}</th>
                <td>{info?.treatmentName}</td>
                <td>{info?.selectedDate}</td>
                <td>{info?.slot}</td>
                <td>${info?.price}</td>

                <td>
                  {info.price && !info?.paid && (
                    <Link to={`/dashboard/payment/${info._id}`}>
                      <button className="btn btn-primary btn-xs">
                        {info?.paid ? paid : Paynow}
                      </button>
                    </Link>
                  )}
                  {/* {info.price && info?.paid && (
                    <span className="text-primary">Paid</span>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoint;
