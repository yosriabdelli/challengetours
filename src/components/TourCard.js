import React from "react";
import { Card, Button, Accordion } from 'react-bootstrap';
import { Link } from "react-router-dom";


const TourCard = ({tour, deleteTour}) => {
  return (
    // <Card>
    //   {" "}
    //   <Card.Body>
    //     {/* <Link to={`/TourDetails/${tour.id}`}> */}
    //       <Card.Img floated="right" size="mini" src={tour.image} />
    //       <Card.Title>{tour.name}</Card.Title>
    //       <Accordion defaultActiveKey="1">
    //         <Card.Text>
    //           <Accordion.Toggle as={Button} variant="link" eventKey="0">
    //             Read more
    //           </Accordion.Toggle>
    //         </Card.Text>

    //         <Accordion.Collapse eventKey="0">
    //           <Card.Text><strong>Description</strong> <br/> {tour.info}</Card.Text>
    //         </Accordion.Collapse>
    //       </Accordion>
    //       <Card.Text><strong className="price">Price : {tour.price}</strong></Card.Text>
          
    //     {/* </Link> */}
    //     <Button variant="primary" type="submit" onClick={() => deleteTour(tour.id)}>Not interested</Button>
    //   </Card.Body>
    // </Card>

    <Card>
      {" "}
      <Card.Body>
          <Link to={`/TourDetails/${tour.id}`}>
            <Card.Img floated="right" size="mini" src={tour.image} />
          </Link>
          <Card.Title>{tour.name}</Card.Title>
          <Card.Text><strong>Description</strong> <br/> {tour.info}</Card.Text>
          <Card.Text><strong className="price">Price : {tour.price}</strong></Card.Text>
          <Card.Text><Button variant="primary" type="submit" onClick={() => deleteTour(tour.id)}>Not interested</Button></Card.Text>
      </Card.Body>
    </Card>

  );
};
export default TourCard;