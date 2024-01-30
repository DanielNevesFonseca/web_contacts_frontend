import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token: boolean = false;

  return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};
