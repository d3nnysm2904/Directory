import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GIPHY_URL = 'https://api.giphy.com/v1';

const Food = () =>
{
    const { name, color } = useParams();
    console.log( color );
    const [ src, setSrc ] = useState( null );
    useEffect( () =>
    {
        async function fetchGif ( searchTerm )
        {
            try
            {
                let res = await axios.get( `${ GIPHY_URL }/gifs/search`, {
                    params: { q: searchTerm, api_key: "WlA6pT650MmIpl36cMr6HMNkraYIWuRz" }
                } );
                setSrc( res.data.data[ 0 ].images.original.url );

            } catch ( e )
            {
                console.log( e );

            }
        }
        fetchGif( name );
    }, [ name ] );
    let img = src ? <img src={ src } alt={ name } /> : null;
    return (
        <div>
            <h1>Heres a pic of { name }.</h1>
            { img }
        </div>
    );

};

export default Food;