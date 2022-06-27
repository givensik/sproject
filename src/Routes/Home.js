import React from 'react'
import Nav from './Nav'

function Home(props) {

  return (
    <div>
        {/* Nav에 인증되는거에따라 바뀌게 만들어야됨 */}
        {<Nav />} 
        <div>
            token = {props.token}
        </div>
        
    </div>
  )
}



export default Home