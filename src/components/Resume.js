import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import parse from 'html-react-parser'
import refs from '../refs'
import { parseBibFile, normalizeFieldValue } from 'bibtex'
import resumeData from '../resumeData'

function inlineCite(bib, citeKey) {
  const cite = bib.getEntry(citeKey)

  const author = cite.getField('author').authors$
  const year = normalizeFieldValue(cite.getField('year'))
  const title = normalizeFieldValue(cite.getField('title'))
  const booktitle = normalizeFieldValue(cite.getField('booktitle'))
    ? normalizeFieldValue(cite.getField('booktitle'))
    : normalizeFieldValue(cite.getField('journal'))

  return (
    <div key={cite._id} style={{ marginBottom: '30px' }}>
      <h3
        style={{
          lineHeight: 'normal',
          textTransform: 'none',
          letterSpacing: 'normal',
          fontSize: 'medium',
        }}
      >
        {title}
      </h3>
      <p>
        {parse(
          cite
            .getField('author')
            .authors$.map((author) => {
              const name = `${author.lastNames[0]}, ${author.firstNames[0][0]}.`
              if (
                `${author.firstNames[0]} ${author.lastNames[0]}` ===
                resumeData.name
              ) {
                return `<b>${name}</b>`
              } else {
                return name
              }
            })
            .join(', ')
        )}
        , ({year}). {title}.
      </p>
      <p>
        <em
          style={{
            lineHeight: '0.25',
            fontSize: 'small',
          }}
        >
          {booktitle}, {year}
        </em>
      </p>
    </div>
  )

  return (
    author
      .map(
        (author) => author.lastNames[0] + ', ' + author.firstNames[0][0] + '.'
      )
      .join(', ') +
    ',' +
    ` (${year}). ${title}.`
  )
}

const Resume = ({ resumeData }) => {
  const bib = parseBibFile(refs)

  return (
    <Container id='resume'>
      <Row className='education'>
        <div className='three columns header-col'>
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <Row className='item' key={item.UniversityName}>
                  <div className='twelve columns'>
                    <h3>{item.UniversityName}</h3>
                    <p className='info'>
                      {item.specialization}
                      <span>&bull;</span>
                      {item.MonthOfLeaving ? (
                        <em className='date'>
                          {item.MonthOfStarting} {item.YearOfStarting} -{' '}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      ) : (
                        <em className='date'>
                          {item.MonthOfStarting} {item.YearOfStarting} - Present
                        </em>
                      )}
                    </p>
                    {item.GPA && (
                      <p className='achievements my-auto'>
                        <b>Cummulative GPA:</b> {item.GPA}
                      </p>
                    )}
                    {item.notableClasses && (
                      <p className='achievements'>
                        <b>Notable Classes:</b> {item.noteableClasses}
                      </p>
                    )}
                    {item.Achievements ? (
                      <p className='achievements'>{parse(item.Achievements)}</p>
                    ) : null}
                  </div>
                </Row>
              )
            })}
        </div>
      </Row>
      <Row className='work'>
        <div className='three columns header-col'>
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          {resumeData.work &&
            resumeData.work.map((item, index) => {
              return (
                <Row className='item' key={item.CompanyName}>
                  <div className='twelve columns'>
                    <h3>{item.CompanyName}</h3>
                    <p className='info'>
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      {item.MonthOfLeaving ? (
                        <em className='date'>
                          {item.MonthOfStarting} {item.YearOfStarting} -{' '}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      ) : (
                        <em className='date'>
                          {item.MonthOfStarting} {item.YearOfStarting} - Present
                        </em>
                      )}
                    </p>
                    <p style={{ whiteSpace: 'pre-wrap' }}>
                      {parse(item.description)}
                    </p>
                    {item.Achievements ? <p>{item.Achievements}</p> : null}
                  </div>
                </Row>
              )
            })}
        </div>
      </Row>

      <Row className='publications'>
        <div className='three columns header-col'>
          <h1>
            <span>Selected Publications</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          {resumeData.publications &&
            resumeData.publications.map((item) => {
              if (!item.name) return <></>
              return inlineCite(bib, item.name)
            })}
        </div>
      </Row>

      <Row className='skill' style={{ marginBottom: '-75px' }}>
        <div className='three columns header-col'>
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          <p>{resumeData.skillsDescription}</p>

          <div className='bars'>
            <ul className='skills'>
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
                                  display: 'inline-block',
                                  width: '100%',
                                }}
                                key={item.skillname}
                              >
                                <span
                                  className={`bar-expand bar-animate bar-${item.score}`}
                                />
                                <em>{item.skillname}</em>
                              </li>
                            </Col>
                          )
                        })}
                    </Row>
                  )
                })}
            </ul>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Resume
