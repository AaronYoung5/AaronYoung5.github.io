import React from "react";
import { Container, Row } from "react-bootstrap";

const ContactMe = ({ resumeData }) => {
  return (
    <Container fluid id="contact" className="m-auto">
      <Row className="m-auto">
        <h1 className="m-auto">Contact Me</h1>
      </Row>
      <Row className="m-auto">
        <a
          id="form-button"
          href="mailto:aarony3131@gmail.com"
          className="mx-auto button button-default button-xl"
          style={{ marginTop: "25px" }}
        >
          Email Me
        </a>
      </Row>
    </Container>
  );
};

export default ContactMe;
