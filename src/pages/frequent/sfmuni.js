import React from 'react';

import BigMap from '../../components/bigmap';
import sfmuniInit from '../../scripts/sfmuni.js';

let SfMuni = () => (
    <BigMap callback={sfmuniInit} id="sfmunimap">
        San Francisco, <a href="https://www.sfmta.com/">Muni</a>
    </BigMap>
)

export default SfMuni;