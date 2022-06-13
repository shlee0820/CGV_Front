import React, {useState, useEffect} from 'react';
import './SeatChoicePage.css';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SeatChoiceBox from '../../components/SeatChoiceBox/SeatChoiceBox';
import axios from 'axios';
import JoinHeader from '../../components/JoinHeader/JoinHeader';

const SeatChoicePage = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    const userTest = () => {
        // 유저인지 아닌지 판단
        axios
            .get("/get_login_id")
            .then(res => res.data)
            .then(res => {
                console.log(res);
                if (res.islogin === true) {
                    setLoginStatus(true);

                } else {
                    setLoginStatus(false);
                }
            })
    }

    useEffect(() => {
        userTest();
    }, []);
    return (
        <div>
            {
                loginStatus
                    ? <JoinHeader/>
                    : <Header/>
            }
            <Navbar/>
            <SeatChoiceBox/>
        </div>
    );
};

export default SeatChoicePage;