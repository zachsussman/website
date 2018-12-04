import React from 'react'
import './heading.css'

const Heading = ({title, children, style}) => (
    <div className="heading" style={style}>
        <div className="heading-separator" />
        <div className="heading-content">{title}</div>{children}
        <div className="heading-separator" />
    </div>
)

export default Heading;