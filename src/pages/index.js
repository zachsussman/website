import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'
import ProjectBox from '../components/projectbox'
import './index.css'

import insightLogo from './images/insight-logo-small.jpg';
import frequentLogo from './images/frequent-logo.png';
import ddeLogo from './images/dde-logo.svg';
import lccLogo from './images/lcc-logo.svg';
import cloudLogo from './images/cloud-logo.png';

const IndexPage = () => (
  <Layout active="Projects">

    <h1 style={{textAlign: "center"}} class="name-header-h1">Hello, world!</h1>
    <div class="name-header-line"></div>

    <p> I'm Zach Sussman, a junior at Carnegie Mellon University majoring in Computer Science.  I'm from sunny (and sometimes rainy) Boca Raton, Florida. </p>
    <div style={{marginBottom: 40}}>
      <Heading title="Projects" />
      <ProjectBox src={insightLogo} name="In-Sight" link="/insight/"> A research project to create a novel haptic feedback sensing device to help the blind and visually impaired navigate their environments. </ProjectBox>
      <ProjectBox src={frequentLogo} name="Frequent Transit" link="/frequent/"> An automatic frequent transit map generator, telling you where you can go when you want to go on transit. </ProjectBox>
      <ProjectBox src={lccLogo} name="Little-CC" link="/little-cc/"> A self-hosting compiler for a large subset of C, targeting x86-64. </ProjectBox>
      <ProjectBox src={cloudLogo} name="Cloud Chambers" link="/cloud/"> A new way to automatically detect subatomic particles moving through cloud chambers, resulting in a particle detector anyone could build at home.  </ProjectBox>
      <ProjectBox name="Star Trek" link="/star-trek/"> Take over the bridge of the Starship Enterprise, and communicate with your teammates to defend against Klingon attacks.  Played by hundreds of people at Spring Carnival 2018. </ProjectBox>
      <ProjectBox name="Build-A-Beast" > Compete against your friends to build the best animal to survive the harsh wilderness!  Played by hundreds of people at Spring Carnival 2017.  </ProjectBox>
      <ProjectBox src={ddeLogo} name="Dance Dance Evolution" link="/dde/"> A room-sized version of Dance Dance Revolution using computer vision.  Cooperate with your teammates to pull off big dance moves. </ProjectBox>
    </div>

  </Layout>
)

export default IndexPage
