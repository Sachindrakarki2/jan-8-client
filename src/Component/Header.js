import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));

    if (u) {
      setUser(u);
    }
    return;
  }, []);

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="#home">LIbary system</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <div className="d-flex gap-2">
                  <h5>welcome back {user?.fName}</h5>
                  <Link to="/" onClick={() => handleOnLogout()}>
                    LogOut
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Nav.Link to="/" className="mx-3">
                  Login
                </Nav.Link>
                <Nav.Link to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
