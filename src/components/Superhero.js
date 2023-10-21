import { Card, Container, Row, Col } from "react-bootstrap";
/*import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";*/
import React from "react";
import { superhero } from "../data";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="superhero">
          SUPER HERO MOVIES
        </h1>
        <br />
        <Row>
          {superhero.map((superhero) => (
            <Col md={4} className="">
              <Card className="movieImage">
                <Card.Img src={superhero.image} alt="Antman Movies" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">{superhero.title}</Card.Title>
                    <Card.Text className="text-left">{superhero.description}</Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
