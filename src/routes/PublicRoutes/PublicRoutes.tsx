import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  // mudar após lógica
  const token: boolean = true;

  return <>{!token ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};
