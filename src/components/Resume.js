import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

const Resume = ({ resumeData }) => {
  return (
    <Container id="resume">
      <Row className="education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <Row className="item" key={item.UniversityName}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>
                      {item.MonthOfLeaving ? (
                        <em className="date">
                          {item.MonthOfStarting} {item.YearOfStarting} -{" "}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      ) : (
                        <em className="date">
                          {item.MonthOfStarting} {item.YearOfStarting} - Present
                        </em>
                      )}
                    </p>
                    {item.GPA && (
                      <p className="achievements my-auto">
                        <b>Cummulative GPA:</b> {item.GPA}
                      </p>
                    )}
                    {item.notableClasses && (
                      <p className="achievements">
                        <b>Notable Classes:</b> {item.noteableClasses}
                      </p>
                    )}
                    <p className="achievements">
                      {ReactHtmlParser(item.Achievements)}
                    </p>
                  </div>
                </Row>
              );
            })}
        </div>
      </Row>
      <Row className="work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item, index) => {
              return (
                <Row className="item" key={item.CompanyName}>
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      {item.MonthOfLeaving ? (
                        <em className="date">
                          {item.MonthOfStarting} {item.YearOfStarting} -{" "}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      ) : (
                        <em className="date">
                          {item.MonthOfStarting} {item.YearOfStarting} - Present
                        </em>
                      )}
                    </p>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      {ReactHtmlParser(item.description)}
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </Row>
              );
            })}
        </div>
      </Row>

      <Row className="publications">
        <div className="three columns header-col">
          <h1>
            <span>Publications</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.publications &&
            resumeData.publications.map((item) => {
              return (
                <div
                  key={item.title + item.citation + item.place}
                  style={{ marginBottom: "30px" }}
                >
                  <h3
                    style={{
                      lineHeight: "normal",
                      textTransform: "none",
                      letterSpacing: "normal",
                      fontSize: "medium",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p>{item.citation}</p>
                  <p>
                    <em
                      style={{
                        lineHeight: "0.25",
                        fontSize: "small",
                      }}
                    >
                      {item.place}, {item.year}
                    </em>
                  </p>
                </div>
              );
            })}
        </div>
      </Row>

      <Row className="skill" style={{ marginBottom: "-75px" }}>
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {resumeData.skillLists &&
                resumeData.skillLists.map((itemList) => {
                  return (
                    <Row key={itemList.name}>
                      {itemList.skills &&
                        itemList.skills.map((item) => {
                          return (
                            <Col key={item.skillname}>
                              <li
                                style={{
                                  display: "inline-block",
                                  width: "100%",
                                }}
                                key={item.skillname}
                              >
                                <span
                                  className={`bar-expand bar-animate bar-${item.score}`}
                                />
                                <em>{item.skillname}</em>
                              </li>
                            </Col>
                          );
                        })}
                    </Row>
                  );
                })}
            </ul>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Resume;
