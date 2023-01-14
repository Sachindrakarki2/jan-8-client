import React from "react";
import { Slidebar } from "../Slidebar";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Dashboard = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Slidebar />
      <div className="dashboard-main">
        <Header />
        <div className="content">{children}</div>

        <Footer />
      </div>
    </div>
  );
};
