import React from 'react';
import Layout from '../components/layout';
import ProjectHeader from '../components/project-header';
import ProjectFooter from '../components/project-footer';

import consolePic from './images/star-trek-console.jpg';
import gameplayPic from './images/star-trek-gameplay.jpg';
import panoPic from './images/star-trek-pano.jpg';

import './star-trek.css';

const StarTrek = () => (
  <Layout>
    <ProjectHeader name="Star Trek" />
    <div class="star-trek-pics">
      <iframe title="" width="560" height="315" src="https://www.youtube.com/embed/7Msui5XYQck?start=100" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="star-trek-pics">
      <img src={consolePic} alt="Game console" className="star-trek-pic"/>
      <img src={panoPic} alt="Game overview" className="star-trek-pic"/>
      <img src={gameplayPic} alt="Gameplay" className="star-trek-pic"/>
    </div>
    <ProjectFooter links={{"Github": "https://github.com/AEPi-AK/star-trek"}} people="AEPi at CMU"/>
  </Layout>
)

export default StarTrek;