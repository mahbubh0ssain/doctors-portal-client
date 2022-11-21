import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, updateUser, googleLogin } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [token] = useToken(userEmail);
  if (token) {
    navigate("/");
  }

  const handleSignup = (data) => {
    signUp(data.email, data.password)
      .then((res) => {
        setSignUpError("");
        toast("User created successfully");
        const userInfo = { displayName: data.name };
        updateUser(userInfo)
          .then(() => {
            saveUserInfo(data.name, data.email);
          })
          .catch(() => {});
      })
      .catch((err) => {
        console.error(err);
        setSignUpError(err.message);
      });
  };

  const saveUserInfo = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEmail(email);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-5">
        <h2 className="text-center text-4xl my-6">Signup Now</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
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
            {errors.email && (
              <p className="text-red-700" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Password must be strong.",
                },
              })}
              className="input input-bordered w-full"
            />{" "}
            {errors.password && (
              <p className="text-red-700" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          {signUpError && <p className="text-red-700">{signUpError}</p>}
          <br />
          <input
            className="btn btn-accent w-full"
            value="Signup"
            type="submit"
          />
        </form>
        <p>
          Already have an account?
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <input
          onClick={handleGoogleLogin}
          className=" btn btn-outline w-full"
          value="Continue With Google"
        />
      </div>
    </div>
  );
};

export default Signup;
