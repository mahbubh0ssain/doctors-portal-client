import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //get appointment options as specialty
  const { data = [] } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("  http://localhost:5000/specialty");
      const data = await res.json();
      return data;
    },
  });

  // const imgHostingKey = process.env.REACT_APP_imgbbApiKey;
  const imgHostingKey = "c03064624aeca7a99f52b4b210c5e08f";

  const addDoctor = (data) => {
    const img = data.img[0];
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: imgData.data.url,
          };
          // save doctors info to DB
          fetch("  http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Doctor added successfully.");
                navigate("/dashboard/manage-doctors");
              }
            });
        }
      });
  };

  return (
    <div className=" flex justify-center items-center -ml-[320px]">
      <div className=" w-1/4 p-5 ">
        <h2 className="text-4xl text-blue-400">Add a Doctor</h2>
        <form onSubmit={handleSubmit(addDoctor)}>
          <div className="form-control w-full">
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
            />{" "}
            {errors?.email && (
              <p className="text-red-700" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label>Specialty</label>
            <select
              {...register("specialty")}
              className="select select-bordered w-full "
            >
              <option disabled selected>
                Pick a specialty
              </option>
              {data.map((info) => (
                <option key={info._id} value={info.name}>
                  {info.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" w-full mt-4">
            <input
              type="file"
              {...register("img", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.img && (
              <p className="text-red-700" role="alert">
                {errors.img?.message}
              </p>
            )}
          </div>
          {/* {signUpError && <p className="text-red-700">{signUpError}</p>} */}
          <br />
          <input
            className="btn btn-accent w-full"
            defaultValue="Add"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
