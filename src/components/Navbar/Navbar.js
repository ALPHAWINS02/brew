import React,{Component} from "react";
import './Navbar.css';
import { Link, Outlet, Route } from "react-router-dom";
import logo from '../../assests/images/LOGO.png';
import logo2 from '../../assests/images/1.png';

function Navbar() {
    return(
        <>
        <nav>
        <div id="navbar">
        <Link to={"/"}><img className="new" src={logo} height='50px' width='50px'/><img className="new1" src={logo2} height='50px' width='50px'></img><font className='brew-labs' color='#BD8A7D'><b>Brew Labs</b></font></Link>
            <div id="linkbar">
                <Link to={"/Pricing"}>Pricing</Link>
                {/* <a href={<Route path='/pricing' component={<Pricing/>}></Route>}>Pricing</a> */}
                <Link to={"/Services"}>Services</Link>
                <Link to={"/About"}>About</Link>
                <Link to={"/Blog"}>Blog</Link>
            </div>
        </div>
        </nav>
        </>
    );
}
export default Navbar;