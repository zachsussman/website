import React from 'react';
import Layout from '../components/layout';
import ProjectHeader from '../components/project-header';
import ProjectFooter from '../components/project-footer';

import { withPrefix } from 'gatsby';

const Cloud = () => (
  <Layout>
    <ProjectHeader name="Automatic Particle Detection in Cloud Chambers" />
    <p> A cloud chamber is a subatomic particle detector used for smaller-scale research and educational purposes. One major limitation of this type of device is the lack of accessible automated programs to detect and analyze the particles. I attempted to rectify this situation by creating my own algorithms to detect and evaluate subatomic particle tracks in videos of functioning cloud chambers. </p>
    <p> I constructed a 10 gallon diffusion cloud chamber and collected 5 hours of video. Using the OpenCV video-processing library for Python, I created a program that analyzed the video and generated a database of track events and properties. The program runs frame by frame, finding groups of foreground pixels, which correspond to tracks. By matching tracks in sequential frames, a database of events is built. Each type of subatomic particle leaves a different path in the chamber, so by evaluating track characteristics including aspect ratio, length, and intensity, I can identify particle type and approximate its energy. </p>
    <p> The program processed tracks at a 90% accuracy rate, and identified beta particle energies within 0.5-1 keV and alpha particle energies within 10-20 keV. </p>
    <ProjectFooter documents={{"Paper": withPrefix("/pdf/cloud-chamber.pdf")}} time="2015-2016" />
  </Layout>
)

export default Cloud;