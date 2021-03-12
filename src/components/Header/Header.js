import React from 'react';
import logo from "../../images/logo.jpg";
import './Header.css'

const Header = () => {
    return (
        <div className = "header">
            {/* <h1>This Is My Header Section</h1> */}
            <img  src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage"> Manage Inventory</a>
            </nav>
            <div className="inputField">
                <input className="inp" placeholder="Search Your Items Here" type="text"/>
            </div>

        </div>
    );
};

export default Header;