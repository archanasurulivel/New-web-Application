import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="py-5 d-flex align-items-center min-vh-100"
      style={{
        background: "linear-gradient(to right, #ff7e5f, #feb47b)",
        color: "#fff",
      }}
    >
      <Container>
        <Row className="gy-4">
          <Col xs={12} md={6} className="contact-info d-flex flex-column align-items-start mb-4 mb-md-0">
            <h3 className="fw-bold mb-4 contact-info-title">Get In Touch</h3>
            <p className="mb-4 contact-info-text">
              Have any questions? Feel free to reach out to us. We're here to help you!
            </p>
            <p className="mb-2 contact-info-text">
              <strong className="text-light">Address:</strong> London Eye, London, UK
            </p>
            <p className="mb-2 contact-info-text">
              <strong className="text-light">Phone Number:</strong> +123-456-7890
            </p>
            <p className="mb-4 contact-info-text">
              <strong className="text-light">E-Mail:</strong> mailto@subx.com
            </p>
            <h5 className="mb-3 contact-info-follow">Follow Us:</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              {[
                { href: "#", icon: <FaFacebookF /> },
                { href: "#", icon: <FaTwitter /> },
                { href: "#", icon: <FaLinkedinIn /> },
                { href: "#", icon: <FaInstagram /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="fs-4 me-3 text-light social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>


          <Col xs={12} md={6}>
            <div
              className="p-4 shadow-lg"
              style={{
                background: "#fff",
                color: "#333",
                borderRadius: "10px",
              }}
            >
              <h4 className="fw-bold mb-4 text-center">Send a Message</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="rounded-pill"
                    style={{ border: "2px solid #ff7e5f" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-mail address"
                    className="rounded-pill"
                    style={{ border: "2px solid #ff7e5f" }}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Message"
                    style={{
                      border: "2px solid #ff7e5f",
                      borderRadius: "10px",
                    }}
                  />
                </Form.Group>

                <Button
                  variant="danger"
                  type="submit"
                  className="w-100 py-2 fw-bold"
                  style={{
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
