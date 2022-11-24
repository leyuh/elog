import React, {useState} from 'react';

import Wiki from "../apiComponents/Wiki";

import '../../styles/SpaceX.css';

function SpaceX (props) {

    return <div id="spaceX-page" className="main-page">
        <Wiki wikiPageTitle="SpaceX"/>
    </div>
}

export default SpaceX;