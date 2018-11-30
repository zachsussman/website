import React from 'react'
import './projectbox.css'

const ProjectBox = ({src, backgroundColor, name, link, description}) => (
    <div className="projectbox">
        <div className="projectbox-left">
        {
        src ? 
        <img className="projectbox-image" style={backgroundColor ? {backgroundColor} : {}} src={src} /> :
        <div className="projectbox-image-filler" />
        }
        </div>
        <div className="projectbox-right"> 
        <h3>{name}</h3>
        <div>{description}</div>
        <Link to={link}>See more</Link>
        </div>
    </div>
)

export default ProjectBox;