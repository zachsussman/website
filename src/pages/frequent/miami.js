import React from 'react';

import BigMap from '../../components/bigmap';
import mdtInit from '../scripts/mdt.js';

let Miami = () => (
    <BigMap callback={mdtInit} id="mdtmap">
        Miami, <a href="http://www.miamidade.gov/transit/">Miami-Dade Transit</a>
    </BigMap>
)

export default Miami;