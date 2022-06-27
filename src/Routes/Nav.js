import React from 'react'
import { Link } from "react-router-dom"

function Nav(props) {
    
  return (
    <div>
        <Link to ="/">
            <h1>Hompage</h1>
        </Link>
        <h2>
            {props.title}
        </h2>
        <ul>
            <li>
                <Link to ="/login"><button>Login</button></Link>
            </li>
            <li>
                <Link to ="/login"><button>Mypage</button></Link>
            </li>
        </ul>

    
    </div>
  )
}

export default Nav