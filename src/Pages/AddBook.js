import React, { useState } from "react";
import { Dashboard } from "../Component/layout/Dashboard";
import book from "../assets/image.jpg";
import { Button, Col, Form, FormLabel, Spinner } from "react-bootstrap";

export const AddBook = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <Dashboard>
      <div className="add">
        <div className="add-top">
          <h1>Add new Book</h1>
        </div>
      </div>

      <div className="add-bottom">
        <Col md={7} className="d-none d-sm-block">
          <img
            src={book}
            className="rounded"
            alt="book-img"
            style={{ width: "50%" }}
          />
        </Col>
        <Col md={5} sm={12} xs={12}>
          <Form className="p-4" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-2">
              <FormLabel>Title</FormLabel>
              <Form.Control
                placeholder="Book Title"
                requireds
                type="text"
                name="title"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <FormLabel className="mb-2">Author</FormLabel>
              <Form.Control
                placeholder="Author"
                required
                type="text"
                name="author"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <FormLabel>ISBN</FormLabel>
              <Form.Control
                placeholder="ISBN"
                required
                type="text"
                name="isbn"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <FormLabel>Year Publish</FormLabel>
              <Form.Control
                placeholder="Year"
                required
                type="number"
                name="year"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <FormLabel>Thumbnail</FormLabel>
              <Form.Control
                placeholder="image"
                required
                type="text"
                name="thumbnail"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="mt-4">
              ADD BOOk{" "}
              <span>
                {isLoading && <Spinner animation="border" variant="dark" />}
              </span>
            </Button>
          </Form>
        </Col>
      </div>
    </Dashboard>
  );
};
