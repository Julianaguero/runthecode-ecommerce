import {  Navigate, Outlet,  useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

const ProtectedRoute= () => {
  const { userAuth } = useAuth();
  const location = useLocation()

  return userAuth?.isAutenthicated ? <Outlet /> :  <Navigate to={"user/signin"} state={location} />;
};

export default ProtectedRoute;
