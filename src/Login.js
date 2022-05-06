import React from 'react'
import "./Login.css"
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className='login'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="Spotify" />
        <a href={loginUrl}>Connect Spotify</a>
    </div>
  )
}

export default Login
