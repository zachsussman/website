import React from 'react'
import './heading.css'

const Heading = ({title}) => (
    <div class="heading">
        <div class="heading-separator"/>
        <div class="heading-content">{title}</div>
        <div class="heading-separator"/>
    </div>
)

export default Heading;