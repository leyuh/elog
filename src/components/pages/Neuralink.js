import React, {useState} from 'react';

import Wiki from "../apiComponents/Wiki";

import '../../styles/Neuralink.css';

function Neuralink (props) {

    return <div id="neuralink-page" className="main-page">
        <Wiki wikiPageTitle="Neuralink"/>
    </div>
}

export default Neuralink;