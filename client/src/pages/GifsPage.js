import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom';

export const GifsPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/api/gifs')
            .then((res) => res.json())
            .then((data) => { setData(data); })
    }, []);

    return (
        <div>
            <h1>Gifs Page</h1>
            <div className="row">
            {
                data.map((gif) => (
                    <div key={gif._id} className="col">
                        <div className="card">
                            <div className="card-image">
                                <img alt={gif.filename} src={`/static/${gif.filepath}`} />
                                <span className="card-title">{gif.filename}</span>
                            </div>
                            <div className="card-action">
                                <NavLink to={`/detail/${gif._id}`}>Details</NavLink>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
