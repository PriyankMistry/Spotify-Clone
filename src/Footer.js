import React from 'react'
import "./Footer.css";
import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';

function Footer() {
  return (
    <div className='footer'>
      <CurrentTrack/>
      <PlayerControls/>
      
    </div>
  )
}

export default Footer

 {/* //     <div className="footer__left">
        
  //       <div className="footer__songInfo">
  //         <h4>Yeah!</h4>
  //         <p>Usher</p>
  //       </div>
  //     </div>
  //     <div className="footer__center">
  //       <Shuffle className='footer__green' />
  //       <SkipPrevious className='footer__icon' />
  //       <PlayCircleOutline fontSize='large' className='footer__icon' />
  //       <SkipNext className='footer__icon' />
  //       <Repeat className='footer__green' />
  //     </div>
  //     <div className="footer__right">
  //       <Grid container spacing={2}>
  //         <Grid item>
  //           <PlaylistPlay />
  //         </Grid>
  //         <Grid item>
  //           <VolumeDown />
  //         </Grid>
  //         <Grid item xs>
  //           <Slider/>
  //         </Grid>
  //       </Grid>
  //     </div> */}
