import React from 'react'
import PropTypes from 'prop-types'
import { Link, withPrefix } from "gatsby"

import './layout.css'

const Layout = ({ active, children }) => {
  let link_directory = {"About Me": '/about/', 'Projects': '/'};

  let links = [];
  for (let link_name in link_directory) {
    links.push(
      <div className="nav-link-item" key={link_name}>      
        <Link to={link_directory[link_name]} className={active === link_name ? 'nav-link-active' : 'nav-link'}>{link_name}</Link>
      </div>
    );
  }
  links.push(
    <div className="nav-link-item" key="resume">
      <a href={withPrefix("pdf/resume.pdf")} className="nav-link">Resume</a>
    </div>
  )


  return (
  <div className="container">
    <div className="nav">
        <div className="nav-name">Zach Sussman</div>
      <div className="nav-links">
        {links}
      </div>
    </div>

    <div className="separator">
      <div className="separator-bar" />
    </div>

    <div className="main">
      <div className="main-container">
        {children}
      </div>
    </div>
  </div>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
