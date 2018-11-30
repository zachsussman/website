import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import './index.css'

const IndexPage = () => (
  <Layout active="Projects">

    <h1 style={{textAlign: "center"}} class="name-header-h1">Hello, world!</h1>
    <div class="name-header-line"></div>

    <div class="main-content">
    <p> I'm Zach Sussman, a junior at Carnegie Mellon University majoring in Computer Science.  I'm from sunny (and sometimes rainy) Boca Raton, Florida. </p>
    </div>

    <div class="main-content">
    <Heading title="Projects" />
    <p> I'm working on a research project called <Link to="/insight/">In-Sight</Link> to create a novel haptic feedback sensing device to help the blind and visually impaired navigate their environments. </p>
    <p> Star Trek </p>
    <p> Build-A-Beast </p>
    <p> I've written a <a href="https://github.com/zachsussman/little-cc">self-hosting compiler</a> for a large subset of C, compiling for the x86-64 architecture. </p>
    <p> In the summer of 2016, I created an <Link to="/frequent/">automatic frequent transit map generator</Link> using <a href="https://www.python.org/">Python</a> and <a href="http://leafletjs.com/">Leaflet.js</a>.  </p>
    <p> At <a href="https://tartanhacks.com/">TartanHacks 2017</a>, my team created a <a href="https://devpost.com/software/dance-dance-evolution">room-sized version of Dance Dance Revolution</a>.  I wrote the computer vision code to detect player positions. </p>
    <p> In 2015, I wrote a <a href={withPrefix("/pdf/cloud-chamber.pdf")}>research paper</a> describing a new program to automatically detect subatomic particles moving through cloud chambers, resulting in a particle detector anyone could build at home. </p>
    </div>

  </Layout>
)

export default IndexPage
