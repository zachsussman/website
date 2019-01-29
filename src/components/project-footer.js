import React from 'react';

import LinkIcon from './link-icon';
import CalendarIcon from './calendar-icon';
import PeopleIcon from './people-icon';
import DocumentIcon from './document-icon';

import './project-footer.css';

let ProjectFooter = ({links, time, people, documents}) => {
  let elems = [];

  if (links) {
    for (let title in links) {
      elems.push(
        <div className="project-footer-box" key={title}>
          <LinkIcon />
          <span className="project-footer-text"><a href={links[title]} target="blank">{title}</a></span>
        </div>
      );
    }
  }

  if (documents) {
    for (let title in documents) {
      elems.push(
        <div className="project-footer-box" key={title}>
          <DocumentIcon />
          <span className="project-footer-text"><a href={documents[title]} target="blank">{title}</a></span>
        </div>
      )
    }
  }

  if (time) {
    elems.push(
      <div className="project-footer-box" key="time">
        <CalendarIcon />
        <span className="project-footer-text">{time}</span>
      </div>
    );
  }

  if (people) {
    elems.push(
      <div className="project-footer-box" key="people">
        <PeopleIcon />
        <span className="project-footer-text">{people}</span>
      </div>
    );
  }

  return (
    <div className="project-footer">
      {elems}
    </div>
  )
}

export default ProjectFooter;