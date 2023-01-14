import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "react-bootstrap";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className="main">{children}</Container>
      <Footer />
    </div>
  );
};
