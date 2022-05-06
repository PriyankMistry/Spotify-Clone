import React from 'react';
import { PlayCircleOutline, PauseCircleOutline, PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { SkipPrevious } from '@mui/icons-material';
import { SkipNext } from '@mui/icons-material';
import { Shuffle } from '@mui/icons-material';
import { Repeat } from '@mui/icons-material';
import { useDataLayerValue } from './DataLayer';
import axios from 'axios';
import { Slider } from '@mui/material'
import "./Footer.css" 

export default function PlayerControls() {
const [{ token, playerState }, dispatch] = useDataLayerValue();
const changeTrack = async (type) => {
  await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
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
                }else
                dispatch({
                  type: 'SET_PLAYLING',
                  currentlyPlaying: null,
          });
}};
const changeState = async () => {
  const state = playerState ? "pause" : "play";
  const response = await axios.put(`https://api.spotify.com/v1/me/player/${state}`, {}, {
    headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
    },
  });
  dispatch({
    type: 'SET_PLAYER_STATE',
    playerState: !playerState,
  });
}
  return (
    <>
    <div className='maincontrols'>
      <div className="shuffle">
        <Shuffle/>
      </div>
      <div className="previous">
        <SkipPrevious onClick={()=> changeTrack("previous")}/>
      </div>
      <div className="state">
        {playerState ? <PauseCircleOutline fontSize='large' onClick={changeState}/> : <PlayCircleOutline fontSize='large' onClick={changeState}/>}
      </div>
      <div className="next">
        <SkipNext onClick={()=> changeTrack("next")}/>
      </div>
      <div className="repeat">
          <Repeat/>
      </div>
    </div>
    <div className="footer__right">
    <div className="volume">
    <VolumeDown/>
    </div> 
    <Slider/>   
    </div>
    </>
  )
}

