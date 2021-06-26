import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
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
                <Row className="item">
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
            resumeData.work.map((item) => {
              return (
                <Row className="item">
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
                    <p style={{ whiteSpace: "pre-wrap" }}>{item.description}</p>
                    <p>{item.Achievements}</p>
                  </div>
                </Row>
              );
            })}
        </div>
      </Row>

      <Row className="skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li>
                      <span
                        className={`bar-expand bar-animate bar-${item.score}`}
                      />
                      <em>{item.skillname}</em>
                    </li>
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
