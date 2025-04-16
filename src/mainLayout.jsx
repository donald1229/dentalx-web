import React, { Children } from "react";
import PublicLayout from "./PublicLayout";
import PrivateLayout from "./PrivateLayout";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const isPrivateRoute = location.pathname.startsWith("/dashboard");

  return isPrivateRoute && token ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <PublicLayout>{children}</PublicLayout>
  );
};

export default MainLayout;
