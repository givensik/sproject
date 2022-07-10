import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter
} from "react-router-dom";

import Login from './Routes/Login';
import Home from './Routes/Home';
import NaverLogin from "./Routes/NaverLogin";
import NaverCallback from "./Routes/NaverCallback";
import Mypage from "./Routes/Mypage";

function App() {
  return (
    <Routes>
         <Route path = "/" element ={<Home />} ></Route>
         <Route path ="/login" element ={<Login />}></Route>
         <Route path ="/NaverLogin" element ={<NaverLogin />}></Route>
         <Route path ="/NaverCallback" element = {<NaverCallback></NaverCallback>}></Route>
         <Route path ="/Mypage" element = {<Mypage></Mypage>}></Route>
         
    </Routes>

    
  );
}

export default App;
