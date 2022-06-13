import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './TheaterChoiceB.css';

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import JoinHeader from '../../components/JoinHeader/JoinHeader';

function TheaterChoiceB() {
    const [amTimeBMovie, pmTimeBMovie] = [1, 2];
    const [Bchoice, setBChoice] = useState(false);

    function timeclick(event) {
        setBChoice(event.target.id);

    }

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
            <div className='movieANDtime'>
                <div className='movie'>
                    <div className='boxHeader'>영화</div>
                    <div className='items'>
                        <Link className="movieLink" to="/theater/choiceMovieA">
                            <div className='BpageAmovie'>
                                <span>12&nbsp;&nbsp;&nbsp;</span>
                                <span>브로커&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </Link>
                        <Link className="movieLink" to="/theater/choiceMovieB">
                            <div className='BpageBmovie'>
                                <span>15&nbsp;&nbsp;&nbsp;</span>
                                <span>범죄도시 2&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='time'>
                    <div className='boxHeader'>시간</div>
                    <div className='movieAtimes'>
                        <div className='movieAtimesBox'>
                            <div className='movieinfo'>
                                <span id='twoD'>2D</span>
                                <span id='locate'>2관 2층</span>
                                <span id='totalSeat'>(총 25석)</span>
                            </div>
                            <div className='timetable'>
                                <div className='amTime'>
                                    <span
                                        className={(
                                            amTimeBMovie == Bchoice)
                                            ? 'selectedtext'
                                            : 'timetext'}
                                        onClick={timeclick}
                                        id={amTimeBMovie}>11:00
                                    </span>
                                    <span className='seattext'>여석</span>
                                </div>
                                <div className='pmTime'>
                                    <span
                                        className={(
                                            pmTimeBMovie == Bchoice)
                                            ? 'selectedtext'
                                            : 'timetext'}
                                        onClick={timeclick}
                                        id={pmTimeBMovie}>18:00
                                    </span>
                                    <span className='seattext'>여석</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottomBigBox'>
                <div className='bottomBox'>
                    <div className='bottomleft'>
                        <div className='poster'>
                            <p>이미지</p>
                            <div className='posterinfo'>
                                <p>제목</p>
                                <p>2D</p>
                                <p>(상영 등급)관람가</p>
                            </div>
                        </div>
                        <div className='bottominfo'>
                            <p>
                                <span className='light'>극장&nbsp;&nbsp;&nbsp;</span>
                                <span className='bold'>CGV 구미 &gt;</span>
                            </p>
                            <p>
                                <span className='light'>일시&nbsp;&nbsp;&nbsp;</span>
                                <span className='bold'>2022.6.15(수) (영화 시간 받아오기)</span>
                            </p>
                            <p>
                                <span className='light'>상영관&nbsp;&nbsp;&nbsp;</span>
                                <span className='bold'>(상영관 정보)</span>
                            </p>
                            <p>
                                <span className='light'>인원&nbsp;&nbsp;&nbsp;</span>
                            </p>
                        </div>
                        <div className='step'></div>
                    </div>
                    <div className='bottomright'>
                        <Link
                            to={(
                                Bchoice)
                                ? '/theater/seat'
                                : '/theater/choiceMovieA'}
                            className='bottombtn'>
                            <div
                                className={(
                                    Bchoice)
                                    ? 'active_btn'
                                    : 'btn'}>
                                <p>➜</p>
                                <p>좌석 선택</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheaterChoiceB;
