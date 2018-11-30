import React from 'react'
import { Link, withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import ContentBox from '../components/contentbox'
import './index.css'

import facebookLogo from './images/facebook-logo-small.png'
import appleLogo from './images/apple-logo-small.png'
import cmuLogo from './images/cmu-logo-small.png'
import macLogo from './images/mac-logo-small.png'
import troveLogo from './images/trove-logo-small.png'
import d3Logo from './images/d3-logo-small.png'
import aepiLogo from './images/aepi-logo-small.png'

const About = () => (
  <Layout active="About Me">

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

    <div class="main-content">
    <Heading title="Experience" />
    <ContentBox src={facebookLogo}> In the summer of 2018, I was a software engineering intern at <a href="https://facebook.com">Facebook</a>, working on the Recruiting Metrics team. I implemented new components in React, managed a large data import from a third-party vendor, and dogfooded a new internal tool to do database migrations. </ContentBox>
    <ContentBox src={appleLogo}> In the summer of 2017, I was a software engineering intern at <a href="https://apple.com">Apple</a>, working on <s>the Apple jetpack</s> <a href="https://www.apple.com/iwork/">iWork</a>, the suite containing <a href="https://www.apple.com/pages/">Pages</a>, <a href="https://www.apple.com/numbers/">Numbers</a>, and <a href="https://www.apple.com/keynote/">Keynote</a>.  I designed and developed new features for iPad using Objective-C++, selected and adapted algorithms from the literature, and created a fully localized user interface for a concurrent backend algorithm. </ContentBox>
    <ContentBox src={cmuLogo}> I was a teaching assistant for the Fall 2017 iteration of <a href="http://www.math.cmu.edu/~jmackey/151_128/welcome.html">Mathematical Foundations for Computer Science</a>, taught by the fantastic John Mackey. This is CMU's introduction to discrete math and proofs course.</ContentBox>
    <ContentBox src={macLogo}> In the spring of 2017, I was a research assistant at the <a href="http://mac.heinz.cmu.edu">Mobility Data Analytics Center</a>, a division of Carnegie Mellon's <a href="http://traffic21.heinz.cmu.edu/">Traffic21</a> institute.  Working under <a href="https://faculty.ce.cmu.edu/qian/">Professor Sean Qian</a>, I modernized a web interface to a predictive traffic modeler, and developed a bikeability score visualization for Pittsburgh. </ContentBox>
    <ContentBox src={troveLogo} backgroundColor="#333"> In the summer of 2016, I interned at <a href="http://trovedata.com/">TROVE</a>, a predictive data science company, where I integrated <a href="http://www.ember-cli-mirage.com/">Ember Mirage</a>, a data mocking framework, into their tests.  I also created a new interface for setting up new users. </ContentBox>
    <ContentBox src={d3Logo}> In the summer of 2015, I did experimental work for <a href="http://www.i3nsight.com/">i3nsight</a>, developing a generalized social network analyzer to detect unusual connections between people.  I created the interface and parts of the connection strength monitor using <a href="https://d3js.org/">d3.js</a>.</ContentBox>
    </div>

    <div class="main-content">
    <Heading title="What I Do" />
    <ContentBox src={aepiLogo}>I'm the president of CMU's chapter of <a href="http://aepi.rocks">Alpha Epsilon Pi</a>. I've also been the treasurer, where I managed a $350,000 budget, ran payroll, and collected dues; and the philanthropy chair, where I hosted charity events, ran clothing drives, and raised money for great organizations like <a href="http://campkesem.org/">Camp Kesem</a>.</ContentBox> 
    <ContentBox> I'm a member of CMU's <a href="https://thebridge.cmu.edu/organization/cmutransportationclub">Transportation Club</a> and <a href="http://suds-cmu.org/">Students for Urban Data Systems</a>, where I attend lectures, work on cool data visualizations, and learn about what's happening in our community.  I also volunteered at <a href="http://transportationcamp.org/events/pgh-2016/">the first annual Pittsburgh Transportation Camp</a>. </ContentBox>
    <ContentBox> I'm the vice president of and sing tenor in a collegiate a cappella group, <a href="https://www.facebook.com/Hillelujah/">Hillelujah</a>, which recently competed at Kol HaOlam, the national Jewish a capella competition, in Washington D.C. </ContentBox>
    </div>


    <div class="main-content">
    <p> <a href="mailto:zachary@zacharysussman.com">Email me!</a> </p>
    </div>
  </Layout>
)

export default About;
