import React, { useState, useEffect } from 'react';

import '../../styles/Tesla.css';

function Tesla (props) {

    const [wiki, setWiki] = useState(null);

    let key = "AAAAAAAAAAAAAAAAAAAAADKjjQEAAAAANeCr7nDNfszFl3KlobPFLplpOSM%3D3WL02OR2W89dRbOVwuXNxgjEnL3zzYST93dhmjXHyHvVQosfqV";

    useEffect(() => {
        console.log("ping");
        var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=Elon_Musk";

        fetch(url)
            .then((response) => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

    }, [])

    return <div id="tesla-page" className="main-page">
        <div></div>
    </div>
}

export default Tesla;