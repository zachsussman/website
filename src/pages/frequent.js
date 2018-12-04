import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Heading from '../components/heading';
import ProjectHeader from '../components/project-header';
import ProjectFooter from '../components/project-footer';

import mdtInit from '../scripts/mdt.js';
import paacInit from '../scripts/paac.js';
import sfmuniInit from '../scripts/sfmuni.js';
import './frequent.css';

class Frequent extends React.Component {

  render () {
    return (
      <Layout active="Frequent Transit"> 
        <ProjectHeader name="Frequent Transit Maps" />

        <div className="maps-container">
          <div className="map-container">
            <h4><Link to="/frequent/pittsburgh/">Pittsburgh</Link></h4>
            <div id="paacmap" className="small-map"></div>
          </div>
          <div className="map-container">
            <h4><Link to="/frequent/miami/">Miami</Link></h4>
            <div id="mdtmap" className="small-map"></div>
          </div>
          <div className="map-container">
            <h4><Link to="/frequent/sfmuni/">San Francisco</Link></h4>
            <div id="sfmunimap" className="small-map"></div>
          </div>
        </div>

        <Heading title="What is this?" />
        <p>
          When you ride the bus, one of the most important things you ask yourself is "how often does the bus come?"
          If that answer is "once an hour," you'll either need to plan your trip in advance, or just not use the bus at all.
          In contrast, if that answer is more like "every few minutes," you can just walk up to the stop and be confident
          that even though you don't know when the bus will come, it will come soon.

          People hate waiting around, so the more frequently a bus comes, the more useful it is.
          Jarrett Walker, an experienced transit planner with his own blog called <a href="http://humantransit.org">Human Transit</a>, often says:
        </p>

        <blockquote> Frequency is freedom. </blockquote>

        <p>He expands in his post <a href="http://humantransit.org/2015/07/mega-explainer-the-ridership-recipe.html">"The Ridership Recipe"</a>:</p>

        <blockquote>
          <p>
            People who are used to getting around by a private vehicle (car or bike) often underestimate the importance of frequency,
            because there isn't an equivalent to it in their experience.  A private vehicle is ready to go when you are, but transit
            is not going until it comes.  High frequency means transit is coming soon, which means that it approximate the feeling of
            liberty you have with your private vehicle - that you can go anytime.  Frequency is freedom!
          </p>

          <p>
            At the opposite extreme, if you live in a single family house with a driveway and usually get around by car, imagine that
            there were an automated gate at the end of your driveway that only opened once an hour, on the hour.  When it's closed,
            you can't get your car in or out.  If that were your situation, your biggest transportation problem would not be traffic
            congestion, or how fast you can go on the freeway; it would be how to get this frigging gate to open more often.
            That's how low frequency feels to a potential transit customer, and why frequency often swamps other factors, like speed,
            in determining whether transit is actually useful.
          </p>
        </blockquote>

        <p>
          Jarrett Walker was also one of the first to <a href="http://humantransit.org/2010/08/basics-the-case-for-frequency-mapping.html"> advocate for "frequent transit maps":
          </a> maps showing not all of the bus routes in an area, but just the most useful, the most <strong> frequent</strong>. Over the past
          few years, more transit agencies have been releasing these frequent transit maps, but most cities still don't have a map of
          their most useful lines.
        </p>

        <p>
          A simultaneous revolution in transit mapping has been the rapid rise in computer-generated
          directions and maps, like Google Maps's transit directions.  These overlapping trends led me to wonder if they could be combined:
          if you could automatically generate frequent transit maps. This project does just that.
        </p>

        <Heading><h3>Technical Details</h3></Heading>

        <p>
          Almost all US transit agencies release route data in a format called <a href="https://developers.google.com/transit/gtfs/">GTFS</a>,
          for General Transit Feed Specification.  I used <a href="https://github.com/jarondl/pygtfs">pygtfs</a> to read the GTFS files, then a Python script to process them
          and filter out the most frequent routes.  The script outputs a Javascript file, which uses <a href="https://leafletjs.com">Leaflet.js</a> and <a href="https://mapbox.com">Mapbox</a> to draw route lines
          on an embedded map.
        </p>

        <p>
          In contrast to some attempts at automatic frequent route maps, I process the data stop by stop to catch the common cases where many routes
          interline into one frequent corridor.  Examples of this happening are the 61A/B/C/D in Pittsburgh, where four 20-minute lines interline
          to one 5 minute line, and the Green Line in Boston, where four branches combine to provide super-frequent service into downtown.
          By doing this, I make sure that I capture the full range of frequency provided by a transit agency.
        </p>

        <p>
          Right now, I use "every 15 minutes or less from 10:00 am to 2:00 pm" as my hardcoded frequency guideline.  Future versions will allow you to specify
          a particular target frequency and time.
        </p>

        <Heading><h3>Areas for Improvement </h3></Heading>

        <p>
          I'd like to allow for custom-defined measures of frequency and reliability.  Also, I'd like to revamp the map-drawing portion, first to join
          up segments of the same route, then to use (if available) GTFS's route line information to make the map prettier.  
        </p>

        <ProjectFooter 
          links={{"Github": "https://github.com/zachsussman/auto-frequent-transit"}} 
          time="Summer 2016" />
      </Layout>
    );
  }

  componentDidMount() {
    mdtInit(false);
    paacInit(false);
    sfmuniInit(false);
  }

}

export default Frequent;