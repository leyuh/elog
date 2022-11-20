import React from 'react';
import '../styles/Header.css';
import logo from '../images/elon1.png';
import tesla from '../images/tesla.png';
import spaceX from '../images/spaceX.png';
import twitter from '../images/twitter.png';
import boringComp from '../images/boringComp.png';
import neuralink from '../images/neuralink.png';

import Tesla from './pages/Tesla';
import SpaceX from './pages/SpaceX';
import Twitter from './pages/Twitter';
import BoringCompany from './pages/BoringCompany';
import Neuralink from './pages/Neuralink';
import HomePage from "./pages/HomePage";

function Header (props) {

    var imgs = [tesla, spaceX, twitter, boringComp, neuralink];
    var pages = [<Tesla/>, <SpaceX/>, <Twitter/>, <BoringCompany/>, <Neuralink/>]

    var {currentPage, setCurrentPage} = props;

    return <div id="header">
        <h1 id="header-title-1">the</h1>
        <h1 id="header-title-2" onClick={() => {
            setCurrentPage(<HomePage/>);
        }}>EL{<img id="header-logo" src={logo}/>}G</h1>
        <ul id="header-list">
            {imgs.map((v, i) => {
                return <li key={i}><img className="list-img" src={v} onClick={() => {
                    if (currentPage != pages[i]) {
                        setCurrentPage(pages[i]);
                    }
                }}/></li>
            })}
        </ul>
    </div>
}

export default Header;