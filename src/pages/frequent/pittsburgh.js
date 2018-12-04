import React from 'react';

import BigMap from '../../components/bigmap';
import paacInit from '../../scripts/paac.js';

let Pittsburgh = () => (
    <BigMap callback={paacInit} id="paacmap">
        Pittsburgh, <a href="http://portauthority.org">Port Authority of Allegheny County</a>
    </BigMap>
)

export default Pittsburgh;