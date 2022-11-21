import React, { useContext, useState } from "react";
import { useTitle } from "../../Hooks/UseTitle";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";
const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm(); // object hisebe destructure korse kintu
  const [loginError, setLoginError] = useState("");

  const [email, setEmail] = useState("");
  const passwordReset = () => {
    resetPassword(email)
      .then(() => {
        alert("Password reset email has been sent.");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);

  if (token) {
    navigate(from, { replace: true });
  }
  const { login, googleLogin, resetPassword } = useContext(AuthContext);
  const handleLogin = (data) => {
    setLoginError("");
    login(data.email, data.password)
      .then((res) => {
        setUserEmail(data.email);
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
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
        <h2 className="text-center text-4xl my-6">Login Now</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required." })}
              onBlur={() => {
                const values = getValues("email");
                setEmail(values);
              }}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
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
                minLength: {
                  value: 6,
                  message: "Password must be at-least 6 characters long.",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <p
            onClick={passwordReset}
            className="my-2 cursor-pointer text-primary"
          >
            Forgot password?
          </p>
          {loginError && <p className="text-red-700">{loginError}</p>}
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p>
          New to Doctor's Portal?{" "}
          <Link className="text-primary" to="/signup">
            Create a account
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

export default Login;
