import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './TheaterChoiceA.css';

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import JoinHeader from '../../components/JoinHeader/JoinHeader';

function TheaterChoiceA() {
    const [amTimeMovie, pmTimeMovie] = [1, 2];
    const [choice, setChoice] = useState(false);
    const [movieAname, setMovieAName] = useState();
    const [movieAPoster, setMovieAPoster] = useState();

    const [movieAShowData, setMovieAShowData] = useState('');

    function timeclick(event) {
        setChoice(event.target.id);
        if (choice == amTimeMovie) {
            setMovieAShowData('62a59fdb9e6ddf6621cf2d4b');
        } else {
            setMovieAShowData('62a5ccab1a58e38fbe6f8b2c');
        }
        console.log(movieAShowData)
        // 만약 오전 11시 영화를 선택했다면 movieAShowData에 오전 11시 브로커 영화의 정보가 들어가고 18시 영화를 선택했다면 18시
        // 브로커 영화의 정보가 들어간다.
    }

    const [loginStatus, setLoginStatus] = useState(false);
    const userTest = () => {
        // 유저인지 아닌지 판단
        axios
            .get("/get_login_id")
            .then(res => res.data)
            .then(res => {
                if (res.islogin === true) {
                    setLoginStatus(true);

                } else {
                    setLoginStatus(false);
                }
            })
    }

    function AmovieData() {
        axios
            .get('/movie')
            .then(res => res.data.movies)
            .then(res => res[1].contents)
            .then(res => {
                setMovieAName(res.name);
                setMovieAPoster(res.poster);
            });
    }

    const test = () => {
        axios
            .get('/theater')
            .then(res => console.log(res))
    }

    useEffect(() => {
        userTest();
        AmovieData();
        test();
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
                            <div className='Amovie'>
                                <span>12&nbsp;&nbsp;&nbsp;</span>
                                <span>브로커&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </Link>
                        <Link className="movieLink" to="/theater/choiceMovieB">
                            <div className='Bmovie'>
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
                                <span id='locate'>1관 1층</span>
                                <span id='totalSeat'>(총 25석)</span>
                            </div>
                            <div className='timetable'>
                                <div className='amTime'>
                                    <span
                                        className={(
                                            amTimeMovie == choice)
                                            ? 'selectedtext'
                                            : 'timetext'}
                                        onClick={timeclick}
                                        id={amTimeMovie}>11:00
                                    </span>
                                    <span className='seattext'>여석</span>
                                </div>
                                <div className='pmTime'>
                                    <span
                                        className={(
                                            pmTimeMovie == choice)
                                            ? 'selectedtext'
                                            : 'timetext'}
                                        onClick={timeclick}
                                        id={pmTimeMovie}>18:00
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
                            <img src={movieAPoster} className='postersize'></img>
                            <div className='posterinfo'>
                                <p>{movieAname}</p>
                                <p>2D</p>
                                <p>12세 이상 관람가</p>
                            </div>
                        </div>
                        <div className='bottominfo'>
                            <div>
                                <span className='light'>극장&nbsp;&nbsp;&nbsp;</span>
                                <span className='bold'>CGV 구미 &gt;</span>
                            </div>
                            <div>
                                <span className='light'>일시&nbsp;&nbsp;&nbsp;</span>
                                <span className='bold'>2022.6.15(수)</span>
                            </div>
                            <div>
                                <span className='light'>상영관&nbsp;&nbsp;&nbsp;</span>
                                <span className='bold'>1관 1층</span>
                            </div>
                            <div>
                                <span className='light'>인원&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </div>
                        <div className='step'>
                            <p className='steptext'>좌석선택 → 결제</p>
                        </div>
                    </div>
                    <div className='bottomright'>
                        <div className='rightbtn'>
                            {/* <Link to={(choice) ? '/theater/seat' : '/theater/choiceMovieA'}> */}
                            <Link
                                to={{
                                    pathname: (choice) ? '/theater/seat' : '/theater/choiceMovieA',
                                    state: { 
                                        idData : {movieAShowData}
                                    }
                                }}>
                                <div
                                    className={(
                                        choice)
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
        </div>
    );
}

export default TheaterChoiceA;
