import React from 'react'
import { useLocation } from 'react-router-dom';
import Home from './Home'

function NaverCallback() {
  const location = useLocation();
  console.log(location);
  console.log(window.location.href);
  
  const token = window.location.href.split('=')[1].split('&')[0];
  console.log(token);
  return (
    <div>
      
      <Home token = {token}></Home>

    </div>
    

  )
}

export default NaverCallback