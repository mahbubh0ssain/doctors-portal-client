import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`);
      const data = res.json();
      return data;
    },
  });

  const handleAdmin = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully become admin");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((info, i) => {
              return (
                <tr key={info._id}>
                  <td>{i + 1}</td>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>
                    {info?.role !== "admin" && (
                      <button
                        onClick={() => handleAdmin(info._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-xs btn-danger ">Click</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
