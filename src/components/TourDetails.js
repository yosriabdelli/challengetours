import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const TourDetails = (props) => {

  const tourFounded = props.tours.find(
    (tour) => tour.id === props.match.params.idTour
  );
  return (
    <>
      <Link to="/tours">
        {" "}
        <Button secondary>return to list </Button>
      </Link>

        <Card>
        {console.log(tourFounded)}
            <Card.Img src={tourFounded.image} alt="image tour"/>
            <Card.Body>
                <Card.Title>{tourFounded.name}</Card.Title>
                <Card.Text>
                <strong>Description</strong>{tourFounded.info}<br/><strong className="price">Price : {tourFounded.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
};

export default TourDetails;



