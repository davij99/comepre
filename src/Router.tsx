import Home from "./assets/pages/home/Home.tsx";
import Project from "./assets/pages/project/Project.tsx";
import Activity from "./assets/pages/activity/Activity.tsx";
import FinalBalance from "./assets/pages/finalBalance/FinalBalance.tsx";
import Materials from "./assets/pages/materials/Materials.tsx";
import { Navigate, useRoutes } from "react-router-dom";
import React from "react";

export const Router: React.FC = () => {
  return useRoutes([
    {
      path: "/home",
      element: <Home></Home>,
    },
    {
      path: "/project/:id",
      element: <Project></Project>,
    },
    {
      path: "/activity",
      element: <Activity></Activity>,
    },
    {
      path: "/finalbalance",
      element: <FinalBalance></FinalBalance>,
    },
    {
      path: "/materials",
      element: <Materials></Materials>,
    },
    {
      path: "*",
      element: <Navigate to="/home" />,
    },
  ]);
};
