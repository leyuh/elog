import React, {useState} from 'react';

import Wiki from "../apiComponents/Wiki";

import '../../styles/BoringCompany.css';

function BoringCompany (props) {

    return <div id="boringCompany-page" className="main-page">
        <Wiki wikiPageTitle="The_Boring_Company"/>
    </div>
}

export default BoringCompany;