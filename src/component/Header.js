
import { headerImg } from '../utils/constant'
import { useState, useEffect } from "react"
import {
    Link,
  } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

    let [logoutName, setLogoutName] = useState('Login')
    let onlineStatus = useOnlineStatus();
    return (
    <div className="flex-container">
        <div id="logo" key="logo">
           <Link to="/"><img src={headerImg} width="100"></img></Link> 
        </div>
        <div id="user" key="navItem" className='nav-right'>
            <ul>
            <li> OnlineStatus : {onlineStatus === false ? "🔴" : "✅"} </li>
                <li> <Link to="/about">About us</Link> </li>
                <li> <Link to="/contact">Contact</Link>  </li>
                <li> <Link to="/form">Form</Link>  </li>
                <li>Cart</li>
                <button className='logout-but' onClick={() => {
                    logoutName === "Login"
                      ? setLogoutName("Logout")
                      : setLogoutName("Login");
                    console.log("log",logoutName)
                }}>{logoutName}</button>
            </ul>
        </div>
    </div>
)
}
export default Header