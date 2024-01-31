import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes/ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      
    </Routes>
  );
};
