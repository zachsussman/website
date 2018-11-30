import React from 'react';
import {withPrefix} from 'gatsby';

import Layout from '../components/layout';
import Heading from '../components/heading';

import './index.css';

const InSight = () => (
    <Layout active="In-Sight">
        <h1 style={{textAlign: "center"}}>In-Sight: Tension-Based Haptic Feedback to Improve Navigation for Blind People</h1>
        <div className="mainContent">
            <Heading><h3>Abstract</h3></Heading>
            <p>Globally, 1.3 billion people live with some form of vision impairment, and 36 million people are blind. For years, the main device used by blind people for navigation has been the traditional white cane, used to detect floor level changes and obstacles and also signaling that its user is blind. However, this trusted method of navigation has its own issues, most notably that it requires contact with obstacles to detect them.
            </p>
            <p>
The predominant mode of haptic feedback for people who are blind is vibration. While an effective way to aware users of their surrounding environments, this widely used method has inherent difficulties in communication bandwidth. The In-Sight platform, created in the Human and Robot Partners Laboratory (HARP Lab) last spring, presents a novel approach to conveying the depth of the user’s surrounding environment using force feedback.
            </p>
            <p>
The initial prototype of In-Sight, which was tested on a small sample of sighted individuals, successfully enabled user navigation in a constrained environment using tension applied to three strings, converting a LIDAR generated point cloud into a tactile map. This area of research has compelling motivation as it provides a similar perceptual response to the white cane, while extending user depth and removing the need to physically interface with obstacles. Our proposal is to improve the In-Sight system and run a series of user studies to determine the performance of the system as a navigational aid.
            </p>
        </div>

        <div className="mainContent" style={{marginBottom: 40}}>
            <Heading><h3>Documents</h3></Heading>
            <ul>
                <li><a href={withPrefix('insight/proposal.pdf')}>Project Proposal</a></li>
            </ul>
        </div>
    </Layout>
)

export default InSight;