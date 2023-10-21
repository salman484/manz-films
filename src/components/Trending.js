import { Card, Container, Row, Col, Image } from "react-bootstrap";
/*import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg"; */
import React from "react";
import { trendings } from "../data";

const Trendings = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper border" id="trendings">
            <Card className="movieImage ">
              {trendings.map((trending) => (
                <div className="bg-dark">
                  <Image src={trending.image} alt="Dune Movies " className="card-image images-border rounded w-100" />
                  <div className="p-2 m-1 text-white ">
                    <Card.Title className="text-center ">{trending.title}</Card.Title>
                    <Card.Text className="text-left ">{trending.description}</Card.Text>
                    <Card.Text className="text-left ">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trendings;
