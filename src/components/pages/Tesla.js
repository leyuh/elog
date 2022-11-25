import React, { useEffect } from 'react';

import Wiki from "../apiComponents/Wiki";

import '../../styles/Tesla.css';

function Tesla (props) {

    let token = "AAAAAAAAAAAAAAAAAAAAADKjjQEAAAAANeCr7nDNfszFl3KlobPFLplpOSM%3D3WL02OR2W89dRbOVwuXNxgjEnL3zzYST93dhmjXHyHvVQosfqV"

    useEffect(() => {
        const url = "https://api.twitter.com/2/tweets/search/recent?query=from:elonmusk";

        fetch(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));

    }, [])

    return <div id="tesla-page" className="main-page">
        <Wiki wikiPageTitle="Tesla,_Inc."/>
    </div>
}

export default Tesla;