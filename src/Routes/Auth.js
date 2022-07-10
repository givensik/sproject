import React from 'react'
import { Cookies, useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function Auth(props) {
// sql에서 access token 값이 같은지 확인 -> 일단 token이 있으면 그냥 쿠키 만드는거로 구현
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    console.log(cookies.token)

    if(props.token){
        setCookie('tokenid',props.token)
        console.log("yes..")
    }else{
        console.log("no..")
    }


  return (
    // 바로 home.js로 갈 수 있는 방법 찾기
    <Link to ="/">
        <h1> Hompage </h1>
    </Link>
  )
}

export default Auth