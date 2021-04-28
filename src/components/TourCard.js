import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const TourCard = ({tour}) => {
  return (
    <Card style={{ margin: "25px" }}>
      {" "}
      <Card.Body>
        <Link to={`/TourDetails/${tour.id}`}>
          <Card.Img floated="right" size="mini" src={tour.image} />
          <Card.Title>{tour.name}</Card.Title>
          <Card.Text>{tour.info}</Card.Text>
          <Card.Text>{tour.price} </Card.Text>
          
        </Link>
      </Card.Body>
    </Card>
  );
};
export default TourCard;