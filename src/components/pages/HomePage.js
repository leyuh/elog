import React, {useState} from 'react';
import img3 from '../../images/backgrounds/background3.jpeg';
import img4 from '../../images/backgrounds/background4.jpeg';
import img6 from '../../images/backgrounds/background6.jpeg';

import '../../styles/HomePage.css';

function HomePage (props) {

    let backgrounds = [img3, img4, img6];

    const [currentBackground, setCurrentBackground] = useState(0);

    return <div id="home-page" className="main-page">
        {backgrounds.map((v, i) => {
            return <img className="background-img" id={`img${i}`} src={v} style={{
                "opacity" : (currentBackground == i) ? "1" : "0",
            }} key={i}/>
        })}

        <div id="bg-clicker" onClick={() => {
            setCurrentBackground((currentBackground+1) % backgrounds.length);
        }}></div>
    </div>
}

export default HomePage;