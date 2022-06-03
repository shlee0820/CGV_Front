import React from 'react';
import logo from '../../assets/cgv_logo.png';

const Header = () => {
    return (
        <header>
            <div className='header-box'>
                <img src={logo}/>
            </div>
        </header>
    );
};

export default Header;