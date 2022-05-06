import React, {useEffect} from 'react'
import { useDataLayerValue } from './DataLayer'
import axios from 'axios';
import "./SidebarOption.css"


export default function Playlists() {
    const [{ token, playlists }, dispatch] = useDataLayerValue();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type":"application/json",
                },
            });
            const {items} = response.data
            const playlists = items.map(({name,id}) => {
                return {name, id};
            } )
            dispatch({
                type: 'SET_PLAYLISTS',
                playlists: playlists,
              });
        };
        getPlaylistData();
    }, [token,dispatch])

    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: 'SET_PLAYLIST_ID', selectedPlaylistId})
    }
  return (
    <div className='playlist'>
      <ul className='styleul'>
          {playlists.map(({name,id}) => {
              return (
                  <li key={id} onClick={() => changeCurrentPlaylist(id)}>{name}</li>
              )
          })}
      </ul>
    </div>
  )
}
