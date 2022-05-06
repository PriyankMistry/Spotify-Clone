import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import { HomeRounded } from '@mui/icons-material';
import { SearchRounded } from '@mui/icons-material';
import { LibraryMusicRounded } from '@mui/icons-material';
import { useDataLayerValue } from './DataLayer';
import Playlists from './Playlists';

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
      <SidebarOption Icon={HomeRounded} title="Home"/>
      <SidebarOption Icon={SearchRounded} title="Search"/>
      <SidebarOption Icon={LibraryMusicRounded} title="Your Library"/>

      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      <Playlists/>
      {/* {playlists ?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))} */}
    </div>
  )
}

export default Sidebar
