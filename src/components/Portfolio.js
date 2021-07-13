import React from "react";
import {
  Container,
  CardDeck,
  Card,
  Row,
  Col,
  Modal,
  Button,
  Image,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import ReactHtmlParser from "react-html-parser";
import TimeAgo from "react-timeago";

function ModalMedia({ type, content, ...props }) {
  if (type === "image") {
    return <Image src={content} {...props} />;
  } else if (type === "video") {
    return (
      <ReactPlayer
        className="player-wrapper"
        playing
        width="100%"
        url={content}
        {...props}
      />
    );
  }
  return <></>;
}

function MyVerticallyCenteredModal({ data, ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: "24px" }}
        >
          {data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        {data.media && (
          <ModalMedia
            type={data.media.type}
            content={data.media.content}
            className="mx-auto"
            style={{ paddingBottom: "10px" }}
          />
        )}
        <p id="modal-body">{ReactHtmlParser(data.description)}</p>
        <h5>{data.keywords}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Portfolio = ({ resumeData }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [currentIndex, setIndex] = React.useState(0);

  return (
    <Container fluid id="portfolio">
      <Row className="m-auto">
        <Col className="m-auto" style={{ padding: "-10px 0px" }}>
          <h1>Portfolio</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <CardDeck>
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <Col key={item.name} md={3} style={{ padding: "20px 0px" }}>
                      <i
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setModalShow(true);
                          setIndex(index);
                        }}
                      >
                        <Card className="portfolio-item" bg="dark" text="light">
                          <Card.Img variant="top" src={item.imgurl} />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.keywords}</Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">
                              Last updated <TimeAgo date={item.update_date} />
                            </small>
                          </Card.Footer>
                        </Card>
                      </i>
                    </Col>
                  );
                })}
            </CardDeck>
          </div>
        </Col>
      </Row>
      <MyVerticallyCenteredModal
        data={resumeData.portfolio[currentIndex]}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default Portfolio;
