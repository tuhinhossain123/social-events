/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user)
  if(loading){
    return <span className="loading loading-dots loading-lg"></span>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRout;
