import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "@/layouts";
import { SwitchRouter } from "./interface";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={SwitchRouter?.home} element={<HomeLayout />} />
    </Routes>
  );
};
