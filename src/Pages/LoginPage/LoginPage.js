import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;