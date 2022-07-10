import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'

function Nav(props) {
    const [mode, setMode] = useState('need login');
    if(props.token && mode === 'need login'){
        // console.log("로그인 성공");
        setMode('logined');
    }
    
    if(mode === 'need login'){
        return (
            <div>
                <Link to ="/">
                    <h1>Hompage</h1>
                </Link>
                
                <ul>
                    <li>
                        <Link to ="/login"><button>Login</button></Link>
                    </li>
                </ul>
        
            
            </div>
          )
    }else{
        return (
            <div>
                <Link to ="/">
                    <h1>Hompage</h1>
                </Link>
                
                <ul>
                    <li>
                        <Link to ="/Mypage"><button>Mypage</button></Link>
                    </li>
                    <li>
                        <button>LogOut</button>
                    </li>
                </ul>
        
            
            </div>
          )
    }


  
}


export default Nav