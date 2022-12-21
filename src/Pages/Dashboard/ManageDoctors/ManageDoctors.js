import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const { data = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctors-portal-server-nu-eight.vercel.app/doctors",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
            },
          }
        );
        const data = res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div>
      <h2>There are {data.length}doctor</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((info, i) => (
              <tr key={info._id}>
                <th>{i + 1}</th>
                <th>
                  <img className="w-12 rounded-full " src={info.img} alt="" />
                </th>
                <th>{info.name}</th>
                <td>{info.email}</td>
                <td>
                  <label
                    onClick={() => setDeleteDoctor(info)}
                    htmlFor="confirmationModal"
                    className="btn btn-primary btn-xs"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          refetch={refetch}
          deleteDoctor={deleteDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
