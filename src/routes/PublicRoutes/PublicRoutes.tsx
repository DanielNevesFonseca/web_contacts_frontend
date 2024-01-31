import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  // mudar após lógica
  const userData = sessionStorage.getItem("@WEB-CONTACTS:TOKEN")

  return <>{!userData ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};
