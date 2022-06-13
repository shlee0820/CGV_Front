import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import logo from '../../assets/cgv_logo.png';
import loginlogout from '../../assets/loginPassword.png'
import mycgv from '../../assets/loginMember.png'
import center from '../../assets/loginCustomer.png'
import hambergericon from '../../assets/Hamburger_icon.png';
import axios from 'axios';

import '../Header/Header.css';

const JoinHeader = () => {
    const navigate = useNavigate();

    const [ isVisible, setIsVisible ] = useState(false);

    const onClickImg = () => {
        setIsVisible(true);
    }

    const onClickClose = () => {
        setIsVisible(false);
    }

    const onClickLogout = () => {
        axios.get('/logout').then(res => res.data).then(res => {
            if(res.result == 'noError') {
                navigate('/');
                window.location.replace('/');
            }
        })
    }

    return (
        <header className='header-box'>
            <Link to='/'>
                <img id='logo' style={{width: "100%", height: "90%", margin: "2%"}} src={logo}/>
            </Link>
            <img id='hidden-btn' src={hambergericon} onClick={onClickImg}/>
            { isVisible ? 
                <section id='total-box'>
                    <div className='row'>
                        <div className='h-btn-box'>
                            <img className='h-btn-img' src={loginlogout} onClick={onClickLogout}/>
                            <span>로그아웃</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='h-btn-box'>
                            <Link to='/my'><img className='h-btn-img' src={mycgv}/></Link>
                            <span>MY CGV</span>
                        </div>
                        <div className='h-btn-box'>
                            <Link to='/#'><img className='h-btn-img' src={center}/></Link>
                            <span>고객센터</span>
                        </div>
                    </div>
                    <button onClick={onClickClose}>X</button>
                </section>
            : null }
            <section className='btn-group-box'>
                <div className='btn-box'>
                    <img className='btn-img' src={loginlogout} onClick={onClickLogout}/>
                    <span className='btn-text'>로그아웃</span>
                </div>
                <div className='btn-box'>
                    <Link to='/my'><img className='btn-img' src={mycgv}/></Link>
                    <span className='btn-text'>MY CGV</span>
                </div>
                <div className='btn-box'>
                    <Link to='/#'><img className='btn-img' src={center}/></Link>
                    <span className='btn-text'>고객센터</span>
                </div>
            </section>
        </header>
    );
};

export default JoinHeader;