
import { headerImg } from '../utils/constant'
import { useState, useEffect } from "react"
import {
    Link,
  } from "react-router-dom";

const Header = () => {

    let [logoutName, setLogoutName] = useState('Login')

    return (
    <div className="flex-container">
        <div id="logo" key="logo">
           <Link to="/"><img src={headerImg} width="100"></img></Link> 
        </div>
        <div id="user" key="navItem" className='nav-right'>
            <ul>
                <li> <Link to="/about">About us</Link> </li>
                <li> <Link to="/contact">Contact</Link>  </li>
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