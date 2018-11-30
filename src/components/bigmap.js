import React from 'react';
import { Link } from 'gatsby';

import Layout from './layout.js';

import './bigmap.css';

class BigMap extends React.Component {
  render () {
    let {id, children} = this.props;
    return (
      <Layout active=""> 
        <div className="bigmap-container">
          <div className="bigmap-back">
          <Link to="/frequent/" className="bigmap-backlink">Back to overview</Link>
          </div>
          <div className="bigmap-heading">{children}</div>
          <div id={id} className="big-map"></div>
        </div>
      </Layout>
    );
  }

  componentDidMount() {
    this.props.callback(true);
  }

}

export default BigMap;