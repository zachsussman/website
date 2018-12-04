import React from 'react';

import { Link } from 'gatsby';

import BackIcon from './back-icon';

import './project-header.css';

let ProjectHeader = ({name}) => (
  <div className="project-header-container">
    <div className="project-header-back">

      <Link to="/" className="project-header-backlink"><BackIcon /></Link>
    </div>
    <h1 className="project-header-h1">{name}</h1>
    <div className="project-header-line"></div>
  </div>
)

export default ProjectHeader;
