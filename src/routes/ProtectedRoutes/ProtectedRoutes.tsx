import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token: boolean = true;

  return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};
