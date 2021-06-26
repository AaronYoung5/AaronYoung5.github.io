import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ resumeData }) => {
  return (
    <Container fluid as="footer" style={{ marginBottom: 0, paddingTop: 35 }}>
      <Row className="m-auto">
        <Col className="m-auto">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.url}>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </Col>
        <Row id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
