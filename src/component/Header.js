
import { headerImg } from '../utils/constant'
import { useState, useEffect } from "react"
const Header = () => {

    let [logoutName, setLogoutName] = useState('Login')

    return (
    <div className="flex-container">
        <div id="logo" key="logo">
            <img src={headerImg} ></img>
        </div>
        <div id="user" key="navItem" className='nav-right'>
            <ul>
                <li>About us</li>
                <li>Help</li>
                <li>Contact</li>
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