import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button } from 'react-bootstrap';

const AddTour = ({ addTo }) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const add = () => {
    addTo({ id: Date.now(), name, info, image, price });
  };
  return (
    <Form>
      <Form.Group>
      <Form.Label>Name</Form.Label>
        <Form.Control value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Name"
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Info</Form.Label>
        <Form.Control value={info}
          onChange={(e) => setInfo(e.target.value)}
          placeholder="info"
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Imge</Form.Label>
        <Form.Control value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Price</Form.Label>
        <Form.Control 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
      </Form.Group>
        <Link to="/tours">
          {" "}
          <Button variant="primary" type="submit" onClick={add}>Add New Tour</Button>
        </Link>
    </Form>
  );
};
export default AddTour;