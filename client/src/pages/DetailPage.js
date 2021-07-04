import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

export const DetailPage = () => {
    const { id } = useParams();

    const [gif, setGif] = useState({});
    useEffect(() => {
        fetch(`/api/gifs/${id}`)
            .then((res) => res.json())
            .then((data) => { setGif(data); })
    }, []);

    return (
        <div>
            <h1>Detail Page</h1>
            <div className="col">
                <div className="card">
                    <div className="card-image">
                        <img alt={gif.filename} src={`/static/${gif.filepath}`} />
                        <span className="card-title">{gif.filename}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}