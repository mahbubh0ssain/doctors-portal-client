import React from "react";
import toast from "react-hot-toast";

const ConfirmationModal = ({ deleteDoctor, refetch }) => {
  const { name, _id } = deleteDoctor;

  const setFinallyDelete = (id) => {
    fetch(`http://localhost:5000/doctors/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`${name} deleted successfully`);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="confirmationModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-700">
            Are you sure? You want to delete.
          </h3>
          <p className="py-4">
            If you delete ${name} , it can not be retrieve.
          </p>
          <div className="flex justify-center gap-3">
            <label
              onClick={() => setFinallyDelete(_id)}
              htmlFor="confirmationModal"
              className="btn btn-sm btn-primary "
            >
              Confirm
            </label>

            <label
              htmlFor="confirmationModal"
              className="btn btn-sm btn-primary "
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
