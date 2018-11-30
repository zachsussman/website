import React from 'react'
import './heading.css'

const Heading = ({title, children}) => (
    <div class="heading">
        <div class="heading-separator"/>
        <div class="heading-content">{title}</div>{children}
        <div class="heading-separator"/>
    </div>
)

export default Heading;