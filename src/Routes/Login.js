import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NaverLogin from 'react-naver-login'

function Login() {
  function refresh(){
      document.location.reload();
  }
  return (
    <div>
        <div>
            <h2> Login Page</h2>
        </div>
        <div onClick={refresh()}>
            {<NaverLogin 
                 clientId="KVS1mzsMhLIa5R3Ab3Dl"
                 callbackUrl="http://127.0.0.1:3000/NaverCallback"
                 render={(props) => <button onClick={props.onClick}>Naver Login</button>}
                    onSuccess={(naverUser) => console.log(naverUser)}
                 onFailure={() => console.log('fail')}
            />}
        </div>

    </div>
  )
}



export default Login