import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './TheaterPage.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import JoinHeader from '../../components/JoinHeader/JoinHeader';

function TheaterPage() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [movieIdData, setMovieIdData] = useState([]);

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

    function getMovieData() {
        axios.get('/theater').then(res => res.data).then(res => res.theater).then((res) => {
            console.log(res[0]);
        })
    }

    useEffect(() => {
        userTest();
        getMovieData()
    }, []);
    return (
        <div>
            {
                loginStatus
                    ? <JoinHeader/>
                    : <Header/>
            }
            <Navbar/>
            <div className='theater'>
                <div className='movieA'>
                    <div className='box'>
                        <div className='header'>
                            <span id='grade'>12&nbsp;&nbsp;&nbsp;</span>
                            <span id='name'>브로커&nbsp;&nbsp;&nbsp;</span>
                            <span id='show'>상영중</span>
                            <span id='detail'>&nbsp;&nbsp;&nbsp;드라마 / 129분 / 2022.06.08 개봉</span>
                        </div>
                        <div className='time_seat'>
                            <div className='info'>
                                <span>▶&nbsp;&nbsp;&nbsp;&nbsp;2D&nbsp;&nbsp;|&nbsp;&nbsp;1관
                                    1층&nbsp;&nbsp;|&nbsp;&nbsp;총 100석</span>
                            </div>
                            <div className='starttimebtn'>
                                <Link className="movieLink" to='/theater/choiceMovieA'>
                                    <div className='am'>
                                        <p>11:00</p>
                                        <p>여석</p>
                                    </div>
                                </Link>
                                <Link className="movieLink" to='/theater/choiceMovieA'>
                                    <div className='am'>
                                        <p>18:00</p>
                                        <p>여석</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='movieB'>
                    <div className='box'>
                        <div className='header'>
                            <span id='grade'>15&nbsp;&nbsp;&nbsp;</span>
                            <span id='name'>범죄도시 2&nbsp;&nbsp;&nbsp;</span>
                            <span id='show'>상영중</span>
                            <span id='detail'>&nbsp;&nbsp;&nbsp;액션 / 106분 / 2022.05.18 개봉</span>
                        </div>
                        <div className='time_seat'>
                            <div className='info'>
                                <span>▶&nbsp;&nbsp;&nbsp;&nbsp;2D&nbsp;&nbsp;|&nbsp;&nbsp;2관
                                    2층&nbsp;&nbsp;|&nbsp;&nbsp;총 100석</span>
                            </div>
                            <div className='starttimebtn'>
                                <Link className="movieLink" to='/theater/choiceMovieB'>
                                    <div className='am'>
                                        <p>11:00</p>
                                        <p>여석</p>
                                    </div>
                                </Link>
                                <Link className="movieLink" to='/theater/choiceMovieB'>
                                    <div className='am'>
                                        <p>18:00</p>
                                        <p>여석</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheaterPage;