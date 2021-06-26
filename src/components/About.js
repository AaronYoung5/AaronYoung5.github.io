import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";

const About = ({ resumeData }) => {
  return (
    <Container fluid id="about">
      <Row className="m-auto">
        <Col sm={{ span: 3 }} className="m-auto">
          <Image
            fluid
            roundedCircle
            className="profile-pic"
            src="images/profile.jpg"
            alt=""
          />
        </Col>

        <Col sm={{ span: 9 }}>
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <span>
                <b>Phone:</b> {resumeData.phone}
                <br />
                <b>Address:</b> {resumeData.address}
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
