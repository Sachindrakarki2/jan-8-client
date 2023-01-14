import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputField } from "../Component/InputField";
import { Layout } from "../Component/layout/Layout";
import { registerNewUser } from "../helper/Axios.js";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password) {
      return toast.error("password does not match");
    }
    const { status, message } = await registerNewUser(rest);
    toast[status](message);
    status == "success" && navigate("/");
  };
  const inputfields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placholder: "Sachindra",
      required: true,
    },
    {
      label: "last Name",
      name: "lName",
      type: "text",
      placholder: "Karki",
      required: true,
    },
    {
      label: "email",
      name: "email",
      type: "email",
      placholder: "sam@gmail.com",
      required: true,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placholder: "****",
      required: true,
    },

    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placholder: "****",
      required: true,
    },
  ];

  console.log(formData);
  return (
    <Layout>
      <Container>
        <Row className="mt-5">
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
          <Col className="md-5 bg-warning p-3 ">
            <div className="md-6 text-center d-flex align-item">
              <Form onSubmit={handleOnSubmit}>
                <h1>
                  <i class="fa-solid fa-id-card"></i> Register Now
                </h1>
                <hr />
                {inputfields.map((input, i) => (
                  <InputField key={i} {...input} onChange={handleOnChange} />
                ))}

                <Form.Group className="mt-3">
                  <Form.Select name="role" required onChange={handleOnChange}>
                    <option value="">select an option</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="my-3">
                  <Form.Check
                    type="checkbox"
                    label="i agree to the t&CS"
                    required
                  />
                </Form.Group>
                <div>
                  <Button variant="danger" type="submit">
                    Register
                  </Button>
                </div>
                <div className="text-center mt-3">
                  Already have an account?<Link to="/">Login Now</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
