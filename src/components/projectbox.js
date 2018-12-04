import React from 'react'
import { Link } from 'gatsby'

import './projectbox.css'
import NextIcon from './next-icon';
import gearLogo from './images/gear-logo.svg';

const ProjectBox = ({src, backgroundColor, name, link, children}) => (
    <div className="projectbox">
        <div className="projectbox-left">
        {
        src ? 
        <img className="projectbox-image" style={backgroundColor ? {backgroundColor} : {}} src={src} alt={name}/> :
        <img className="projectbox-image" src={gearLogo} alt="Gears by Gregor Cresnar from the Noun Project" /> 
        }
        </div>
        <div className="projectbox-right"> 
        <h3>{name}</h3>
        <div>{children}</div>
        {link ? 
            <Link to={link} className="projectbox-more"><span style={{marginRight: 5}}>See more</span><NextIcon /></Link> 
            : null }
        </div>
    </div>
)

export default ProjectBox;