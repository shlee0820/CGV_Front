import React, {useState, useEffect} from 'react';
import './MyPage.css';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import axios from 'axios';
import JoinHeader from '../../components/JoinHeader/JoinHeader';

const MyPage = () => {

    // 추후 통신으로 받아올 값
    // : 사용자 이름, 아이디, 예매 내역, 취소 내역
    useEffect(() => {
        axios.get("/get_login_id")
        .then(res => {
            if( res.islogin) {
                
            }
        })
        axios.get("/user/mypage")
        .then(console.log);
    }, []);

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
        <section>
            {
                loginStatus
                    ? <JoinHeader/>
                    : <Header/>
            }
            <Navbar/>
            <article id='my-container'>
                <div id='my-box'>
                    <h2>이수화님&nbsp;&nbsp;&nbsp;</h2>
                    <span>tnghk123123</span>
                    <hr/>
                    <h4>고객님은 <u>일반</u> 입니다.</h4>
                </div>
            </article>

            <article id='my-ticket-container'>
                <h3>MY 예매내역</h3>
                <span>예매번호로만 티켓을 찾을 수 있으니 반드시 확인 부탁드립니다.</span>
                <div id='my-ticket-info'>
                    고객님의 최근 예매내역이 존재하지 않습니다.
                </div>
            </article>
            <article id='my-ticket-cancel-container'>
                <h3>MY 취소내역</h3>
                <span>상영일 기준 지난 7일 동안의 취소내역입니다.</span>
                <div id='my-ticket-info'>
                    고객님의 최근 취소내역이 존재하지 않습니다.
                </div>
            </article>
        </section>
    );
};

export default MyPage;