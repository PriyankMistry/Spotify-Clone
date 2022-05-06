import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDataLayerValue } from './DataLayer';

function CurrentTrack() {
    const [{ token, currentlyPlaying }, dispatch] = useDataLayerValue();
    const [data, setData] = useState()
    useEffect(() => {
        const getCurrentTrack = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            if (response.data !== "") {
                const { item } = response.data;
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,
                };
                dispatch({
                    type: 'SET_PLAYLING',
                    currentlyPlaying,
                });
                setData(currentlyPlaying);
            }
        };
        getCurrentTrack();
    }, [token, dispatch, data])

    return <div>
        {
            data && (
                <div className="track">
                    <div className="track__image">
                        <img src={data.image} alt="currentlyplaying" />
                    </div>
                    <div className="track__info">
                        <h4>{data.name}</h4>
                        <h6>{data.artists.join(", ")}</h6>
                    </div>
                </div>
            )}
    </div>

}

export default CurrentTrack
