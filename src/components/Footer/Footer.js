import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // For social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient text-white py-5 mt-5">
      <Container>
        <Row>
       <Col md={3} sm={12}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-white mx-2">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" className="text-white mx-2">
                <FaTwitter size={30} />
              </a>
              <a href="https://linkedin.com" className="text-white mx-2">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com" className="text-white mx-2">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>


          <Col md={5} sm={5}>
            <h5>Contact Us</h5>
            <p>1234 Main Street, Suite 567</p>
            <p>City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>

   
          <Col md={3} sm={12}>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates.</p>
            <input type="email" className="form-control" placeholder="Enter your email" />
            <button className="btn btn-warning mt-2 w-100">Subscribe</button>
          </Col>
       
        </Row>
      

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
