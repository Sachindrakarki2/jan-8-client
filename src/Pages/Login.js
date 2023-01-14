import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../Component/layout/Layout";
import { toast } from "react-toastify";
import { loginUser } from "../helper/Axios";

const initialState = {
  email: "",
  password: "",
};
export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message, user } = await loginUser(formData);
    if (status === "success") {
      toast[status](message);
      sessionStorage.setItem("user", JSON.stringify(user));
      navigate("/Books");
    } else {
      toast[status](message);
    }
    setFormData(initialState);
  };
 
  return (
    <Layout>
      <Container>
        <Row className="mt-5">
          <Col className="md-6 bg-warning p-5">
            <div className="bg-light p-4 rounded">
              <Form onSubmit={handleOnSubmit}>
                <h1 className="text-center">Login</h1>
                <hr />
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Sam@gmail.com"
                    required
                    onChange={handleOnChange}
                    value={formData.email}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="*****"
                    onChange={handleOnChange}
                    value={formData.password}
                  ></Form.Control>
                </Form.Group>
                <div>
                  <Button variant="warning" type="submit">
                    Login
                  </Button>
                </div>
                <div className="text-center mt-3">
                  Dont have account ?<Link to="/register">registerNow</Link>
                </div>
              </Form>
            </div>
          </Col>

          <Col className="md-6 text-center d-flex align-items-center info d-none  d-md-flex">
            <div>
              <h1>
                <i class="fa-regular fa-registered"></i> Welcome to library
                Management system
              </h1>
              <hr />
              <p>
                Register and Acess our Library management system you can view
                and borrow books
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
