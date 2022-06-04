import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;
