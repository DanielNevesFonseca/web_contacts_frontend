import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const userData = sessionStorage.getItem("@WEB-CONTACTS:TOKEN")

  return <>{userData ? <Outlet /> : <Navigate to="/" />}</>;
};
