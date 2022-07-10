import React from 'react'
import Nav from './Nav'
import { useState } from 'react'

function Home(props) {
  const token = props.token;
  const [login, setLogin] = useState(false);
  if(document.cookie && login === false){
    console.log("쿠키 있음");
    setLogin(true)
  }
  console.log(login);
  let myCookie = document.cookie 
  return (
    <div>
        
        {/* Nav에 인증되는거에따라 바뀌게 만들어야됨 */}
        {<Nav token ={myCookie}></Nav>} 
        <div>
            token = {props.token}
        </div>
        <div>
          Hello {props.name}
        </div>
        
    </div>
  )
}



export default Home