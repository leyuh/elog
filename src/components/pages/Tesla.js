import React, { useState, useEffect } from 'react';

import '../../styles/Tesla.css';

function Tesla (props) {

    const [tweets, setTweets] = useState(null);

    let key = "AAAAAAAAAAAAAAAAAAAAADKjjQEAAAAANeCr7nDNfszFl3KlobPFLplpOSM%3D3WL02OR2W89dRbOVwuXNxgjEnL3zzYST93dhmjXHyHvVQosfqV";

    useEffect(() => {
        console.log("ping");
        const url = "https://api.twitter.com/2/tweets/search/recent?query=from:elonmusk";
        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Origin": "http://localhost:3000",
            },
        })
        .then(response => response.json())
        .then(data => setTweets(data))
        .catch(err => console.log(err))
    }, [])

    return <div id="tesla-page" className="main-page">
        <div>{JSON.stringify(tweets)}</div>
    </div>
}

export default Tesla;