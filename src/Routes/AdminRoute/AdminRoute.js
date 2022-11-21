import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [admin, loader] = useAdmin(user?.email);
  if (loader) {
    return <p>Loading...</p>;
  }
  if (user && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
