import React, { useState, useEffect } from 'react';
import "../../styles/NewYorkTimes.css";

function NewYorkTimes (props) {
    const {topic} = props;

    const key = "lJrAYSkSfpJT2uNRs7MoGIkwfKyykgSu";
    const [nytData, setNytData] = useState(null);

    useEffect(() => {
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=${key}`;

        fetch(url)
            .then((response) => response.json())
            .then(data => {
                setNytData(data.response.docs);
            })
            .catch(err => console.log(err));
    }, [])

    return <div className="nytDiv">
        {(nytData || []).map((val, i) => {
            return <div className='articleDiv' key={i}>
                <p className="article-headline">{JSON.stringify(val.headline.main, null, 2).substring(1, JSON.stringify(val.headline.main, null, 2).length - 1)}</p>
                <p className="article-title">{JSON.stringify(val.abstract, null, 2).substring(1, JSON.stringify(val.abstract, null, 2).length - 1)}</p>
                <p className="article-paragraph">{JSON.stringify(val.lead_paragraph, null, 2).substring(1, JSON.stringify(val.lead_paragraph, null, 2).length - 1)}</p>
                <p className="article-date">{(JSON.stringify(val.pub_date, null, 2)).substring(1, 11)}</p>
            </div>
        })}
    </div>
}

export default NewYorkTimes;