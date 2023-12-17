
import { headerImg } from '../utils/constant'

const Header = () => (
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
            </ul>
        </div>
    </div>
)
export default Header