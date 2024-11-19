import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { FaPlane, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage-container">

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600?text=Explore+the+World"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore the World</h3>
            <p>Embark on unforgettable journeys to the most beautiful places.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600?text=Adventure+Awaits"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Adventure Awaits</h3>
            <p>Let your adventure begin with great destinations and travel offers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600?text=Discover+New+Cultures"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Discover New Cultures</h3>
            <p>Experience the rich cultural diversity around the globe.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Container className="mt-5">
        <Row className="text-center">
          <Col xs={12} sm={6} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title><FaPlane size={50} color="#e06500" /></Card.Title>
                <Card.Title>Book a Flight</Card.Title>
                <Card.Text>
                  Find and book flights easily with the best prices available. Your adventure starts here.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title><FaMapMarkerAlt size={50} color="#e06500" /></Card.Title>
                <Card.Title>Find Destinations</Card.Title>
                <Card.Text>
                  Explore new and exciting destinations for your next holiday or business trip.
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title><FaGlobe size={50} color="#e06500" /></Card.Title>
                <Card.Title>Global Tours</Card.Title>
                <Card.Text>
                  Join our exclusive global tours and experience guided travel to stunning locations.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center">About Us</h2>
            <p className="text-center">
              We are passionate about travel and creating the perfect experiences for our customers. Whether you seek adventure, relaxation, or cultural immersion, we have the perfect trip for you. Explore the world with us today!
            </p>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 Travel Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
