import React from 'react';
import '../styles/Header.css';
import logo from '../images/elon1.png';
import tesla from '../images/tesla.png';
import spaceX from '../images/spaceX.png';
import twitter from '../images/twitter.png';
import boringComp from '../images/boringComp.png';
import neuralink from '../images/neuralink.png';

function Header (props) {
    return <div id="header">
        <h1 id="header-title-1">the</h1>
        <h1 id="header-title-2">EL{<img id="header-logo" src={logo}/>}G</h1>
        <ul id="header-list">
            <li><img className="list-img" src={tesla}/></li>
            <li><img className="list-img" src={spaceX}/></li>
            <li><img className="list-img" src={twitter}/></li>
            <li><img className="list-img" src={boringComp}/></li>
            <li><img className="list-img" src={neuralink}/></li>
        </ul>
    </div>
}

export default Header;