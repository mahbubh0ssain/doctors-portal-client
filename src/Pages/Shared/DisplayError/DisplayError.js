import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  console.log(error);
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div>
      <p className="text-red-700">Something went wrong.</p>
      <p>{error.statusText || error.message}</p>
      <h3>
        Please <button onClick={handleLogOut}>Logout</button> and log back in.
      </h3>
    </div>
  );
};

export default DisplayError;
