import React from "react";
import { Container, Navbar, Nav, Row } from "react-bootstrap";

const Header = ({ resumeData }) => {
  return (
    <React.Fragment>
      <header id="home">
        <Navbar id="nav-wrap">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav as="ul" className="m-auto nav" id="nav">
              <Nav.Item as="li" className="current">
                <Nav.Link as="a" href="#home" className="smoothscroll">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as="a" href="#about" className="smoothscroll">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as="a" href="#resume" className="smoothscroll">
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as="a" href="#portfolio" className="smoothscroll">
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as="a" href="#contact" className="smoothscroll">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{resumeData.name}</h1>
            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;
