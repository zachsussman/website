import React from 'react'
import './contentbox.css'

const ContentBox = ({src, backgroundColor, children}) => (
    <div className="contentbox">
        <div className="contentbox-left">
        {
        src ? 
        <img className="contentbox-image" style={backgroundColor ? {backgroundColor} : {}} src={src} alt=""/> :
        <div className="contentbox-image-filler" />
        }
        </div>
        <div className="contentbox-right"> 
        {children}
        </div>
    </div>
)

export default ContentBox;