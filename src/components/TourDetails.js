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
            <Card.Img src={tourFounded&& tourFounded.image} />
            <Card.Body>
                <Card.Title>{tourFounded&& tourFounded.name}</Card.Title>
                <Card.Text>
                    <span> {tourFounded&& tourFounded.info}</span>
                </Card.Text>
                <Card.Text>{tourFounded&& tourFounded.price}</Card.Text>
            </Card.Body>
        </Card>
    </>
  );
};

export default TourDetails;



