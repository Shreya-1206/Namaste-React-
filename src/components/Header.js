import {LOGO_URL, CART_IMG_URL} from "../utlis/constants";

const Header = () => {
    return (
        <div className= "header">
            <div className = "logo-container">
                <img className = "logo" src ={LOGO_URL}/>
                <h3 className = "logo-title">Namaste Gastronomy</h3>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <img className = "cart" src = {CART_IMG_URL}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;