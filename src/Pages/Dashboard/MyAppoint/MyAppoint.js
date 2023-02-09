import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyAppoint = () => {
  const { user } = useContext(AuthContext);
  const { data = [], isLoading } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/booking?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  } else if (!isLoading && !data.length) {
    return <div className="text-5xl text-center">No data</div>;
  }

  return (
    <div className="px-2">
      <h3 className="text-3xl mb-5">
        Appointments of
        <span className="text-blue-600"> {user?.displayName}</span>
      </h3>
      <div className="overflow-x-auto ">
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
                  {info.price && (
                    <button
                      className="btn btn-primary btn-xs"
                      disabled={info?.paid}
                    >
                      <Link to={`/dashboard/payment/${info._id}`}>
                        {info?.paid ? "Paid" : "Pay "}
                      </Link>
                    </button>
                  )}
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
