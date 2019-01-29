import React from 'react';
import ProjectHeader from '../components/project-header';
import Layout from '../components/layout';
import Heading from '../components/heading';
import ProjectFooter from '../components/project-footer';

import './dde.css';

const DDE = () => (
  <Layout>
    <ProjectHeader name="Dance Dance Evolution" />
    <div class="dde-video">
      <iframe title="Dance Dance Evolution" width="560" height="315" src="https://www.youtube.com/embed/AT8xWHUS_W0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <Heading title="What is this?" />
    <p>
      Dance Dance Evolution projects four different colored circles for users to step on and gain points. A camera is used to track the location of users based on hat color as players move across the floor. The circles are constantly changing location based on the rhythm of the song, creating an exciting game experience.
    </p>

    <p>
      Built for TartanHacks 2017.
    </p> 
    <ProjectFooter links={{"DevPost": "https://devpost.com/software/dance-dance-evolution"}} time="February 2017" people="Alex Baikovitz, Jake Olkin, Tom Wildenhain" />
  </Layout>
)

export default DDE;