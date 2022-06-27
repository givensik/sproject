import React from 'react'
import { Link } from 'react-router-dom'
import NaverLogin from 'react-naver-login'

function Login() {
  return (
    <div>
        <div>
            <h2> Login Page</h2>
        </div>
        <div>
            <Link to ="/NaverLogin">
                <button>
                 네이버 로그인
                </button>
            </Link>
        </div>
        <div>
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