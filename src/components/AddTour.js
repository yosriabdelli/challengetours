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
    <Form className="addform">
      <Form.Group>
        <Form.Control value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3}
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          placeholder="Description"/>
      </Form.Group>

      
        <Link to="/tours">
          {" "}
          <Button variant="primary" type="submit" onClick={add}>Add New Tour</Button>
        </Link>
    </Form>
  );
};
export default AddTour;