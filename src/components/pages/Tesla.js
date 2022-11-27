import React, {useState, useEffect } from 'react';

import Wiki from "../apiComponents/Wiki";
import NewYorkTimes from "../apiComponents/NewYorkTimes";

import '../../styles/Tesla.css';

function Tesla (props) {

    return <div id="tesla-page" className="main-page">
        <Wiki wikiPageTitle="Tesla,_Inc."/>
        <NewYorkTimes topic="Tesla"/>
    </div>
}

export default Tesla;