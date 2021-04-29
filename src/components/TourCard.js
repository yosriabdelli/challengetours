import React, { useState } from "react";
import { Card, Button, Accordion } from 'react-bootstrap';
import { Link } from "react-router-dom";


const TourCard = ({tour, deleteTour}) => {
  //readMore
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };


  return (
    <Card>
      {" "}
      <Card.Body>
          <Link to={`/TourDetails/${tour.id}`}>
            <Card.Img floated="right" size="mini" src={tour.image} />
          </Link>
          <Card.Title>{tour.name}</Card.Title>
          <Card.Text>
            <strong>Description</strong>
            <br/>
            {isReadMore ? tour.info.slice(0, 100) : tour.info}
            <br/>
            <Button variant="primary" onClick={toggleReadMore} className="read">
              {isReadMore ? "Read more" : " Show less"}
            </Button>

          </Card.Text>
          <Card.Text><strong className="price">Price : {tour.price}</strong></Card.Text>
          <Card.Text><Button variant="primary" type="submit" onClick={() => deleteTour(tour.id)}>Not interested</Button></Card.Text>
      </Card.Body>
    </Card>

  );
};
export default TourCard;