import React, { useState, useEffect } from 'react';
import logo from "../../images/wikiLogo.png";
import "../../styles/Wiki.css";

function Wiki (props) {
    const {wikiPageTitle} = props;

    let eWikiPageTitle = "";

    for (let char in wikiPageTitle) {
        if (wikiPageTitle[char] != "_") {
            eWikiPageTitle += wikiPageTitle[char];
        } else {
            eWikiPageTitle += " ";
        }
    }

    const [wiki, setWiki] = useState(null);

    useEffect(() => {
        const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=" + wikiPageTitle;

        fetch(url)
            .then((response) => response.json())
            .then(data => {
                setWiki(Object.values(data.query.pages)[0].extract);
            })
            .catch(err => console.log(err));

    }, [])

    return <div className="wikiDiv">
        <img className="wikiImg" src={logo}/>
        <h3 className="wikiTitle">{eWikiPageTitle}</h3>
        <hr/>
        <p className="wikiParagraph">{wiki}</p>
        <a className="wikiLink" target="_blank" href={`https://en.wikipedia.org/wiki/${wikiPageTitle}`}>Read more</a>
    </div>
}

export default Wiki;