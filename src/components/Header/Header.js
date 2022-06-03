import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/cgv_logo.png';
import login from '../../assets/loginPassword.png'
import join from '../../assets/loginJoin.png'
import mycgv from '../../assets/loginMember.png'
import center from '../../assets/loginCustomer.png'
import hambergericon from '../../assets/Hamburger_icon.png';

import './Header.css';

const Header = () => {
    return (
        <header className='header-box'>
            <Link to='/'>
                <img id='logo' style={{width: "100%", height: "90%", margin: "2%"}} src={logo}/>
            </Link>
            <img id='hidden-btn' src={hambergericon}/>
            <section className='btn-group-box'>
                <div className='btn-box'>
                    <Link to='/login'><img className='btn-img' style={{width: "50px"}} src={login}/></Link>
                    <span className='btn-text'>로그인</span>
                </div>
                <div className='btn-box'>
                    <Link to='/join'><img className='btn-img' style={{width: "50px"}} src={join}/></Link>
                    <span className='btn-text'>회원가입</span>
                </div>
                <div className='btn-box'>
                    <Link to='/my'><img className='btn-img' style={{width: "50px"}} src={mycgv}/></Link>
                    <span className='btn-text'>MY CGV</span>
                </div>
                <div className='btn-box'>
                    <Link to='/#'><img className='btn-img' style={{width: "50px"}} src={center}/></Link>
                    <span className='btn-text'>고객센터</span>
                </div>
            </section>
            
        </header>
    );
};

export default Header;