import './Navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-box">
                <div className="navbar-item-blank">
                    <Link className="navItem" to='/movie'>์ํ</Link>
                    <Link className="navItem" to='/theater'>๊ทน์ฅ</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;