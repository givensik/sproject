import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home'

function NaverCallback() {
  const location = useLocation();
  // console.log(location);
  // console.log(window.location.href);
  let name = "none"
  const token = window.location.href.split('=')[1].split('&')[0];
  // console.log(token);
  // if(token === 'AAAAOKgAEL7zrTw6TTxb8XAXBh_14GKnvapMgS1wqVeWBu6MVZ_gbSHuejk7nu0pGXws0SjEmpq6X_oflXjkmEXZmrU'){
  //   name = "givensik"
  // }

  return (

    <div>
      <Auth token = {token}></Auth>
    </div>

  )
}

export default NaverCallback