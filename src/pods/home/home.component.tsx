import React from "react";
import { HomeFormProducts } from "./components";
import "./home.styles.scss";

export const Home: React.FC = () => {
  return (
    <div className="rootHome">
      <h1>Home</h1>
      <HomeFormProducts />
    </div>
  );
};
