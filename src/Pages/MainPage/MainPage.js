import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MainMovieBox from '../../components/MainMovieBox/MainMovieBox'
import './MainPage.css';
import event1 from './EventImg/event1.jpg'
import event2 from './EventImg/event2.jpg'
import event3 from './EventImg/event3.jpg'
import event4 from './EventImg/event4.jpg'
import axios from 'axios';
import JoinHeader from '../../components/JoinHeader/JoinHeader';

function MainPage() {
    const [movieViewNum, setMovieViewNum] = useState(1);
    const movieId = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ];
    const [eventViewNum, setEventViewNum] = useState(1);
    const [event1id, event2id, event3id, event4id] = [1, 2, 3, 4];
    const [movieData, setMovieData] = useState([]);
    const [movieCount, setMovieCount] = useState(0);

    function onMovieLeftClick() {
        if (movieViewNum > 1) {
            setMovieViewNum(movieViewNum - 1);
        } else {
            setMovieViewNum(movieViewNum);
        }
    }

    function onMovieRightClick() {
        if (movieViewNum < 5) {
            setMovieViewNum(movieViewNum + 1);
        } else {
            setMovieViewNum(movieViewNum);
        }
    }

    function onEventLeftClick() {
        if (eventViewNum > 1) {
            setEventViewNum(eventViewNum - 1);
        } else {
            setEventViewNum(eventViewNum);
        }
    }

    function onEventRightClick() {
        if (eventViewNum < 2) {
            setEventViewNum(eventViewNum + 1);
        } else {
            setEventViewNum(eventViewNum);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (eventViewNum > 1) {
                setEventViewNum(eventViewNum - 1);
            } else if (eventViewNum < 2) {
                setEventViewNum(eventViewNum + 1);
            }
        }, 3000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (eventViewNum > 1) {
                setEventViewNum(eventViewNum - 1);
            } else if (eventViewNum < 2) {
                setEventViewNum(eventViewNum + 1);
            }
        }, 3000)
    }, [eventViewNum]);

    const getMovie = () => {
        // 영화 데이터 받아오기
        axios
            .get("/movie")
            .then(res => res.data.movies)
            .then(res => {
                setMovieData([...res]);
                setMovieCount(res.length);
            });
    }

    const [loginStatus, setLoginStatus] = useState(false);
    const userTest = () => {
        // 유저인지 아닌지 판단
        axios
            .get("/get_login_id")
            .then(res => res.data)
            .then(res => {
                console.log(res);
                if (res.islogin) {
                    setLoginStatus(true);

                } else {
                    setLoginStatus(false);
                }
            })
    }

    useEffect(() => {
        getMovie();
        userTest();
    }, []);

    const makeMovieBox = (arr) => {
        const result = [];
        for (let i = 0; i < movieCount; i++) {
            result.push(
                <div
                    className={(
                        movieViewNum <= movieId[i] && movieId[i] <= movieViewNum + 3)
                        ? "default-movie-view"
                        : "default-movie-none"}
                    id={movieId[i]}>
                    <MainMovieBox
                        no={i + 1}
                        id={arr[i]._id}
                        name={arr[i].contents.name}
                        poster={arr[i].contents.poster}
                        release={arr[i].contents.release}/>
                </div>
            )
        }
        return result;
    }

    return (
        <div>
            {
                loginStatus
                    ? <JoinHeader/>
                    : <Header/>
            }
            <Navbar/>
            <div className='main-movie-list'>
                <section className='main-movie-container'>
                    <i className="left-btn" onClick={onMovieLeftClick}>
                        ⇦
                    </i>
                    <section id='main-movie-box'>
                        {/* 화면 줄어들 때 영화 박스가 페이지 너비에 따라 같이 줄어들게 만들기 */}
                        {makeMovieBox(movieData)}
                    </section>
                    <i className="right-btn" onClick={onMovieRightClick}>
                        ⇨
                    </i>
                </section>
            </div>

            <div className="main-event">
                <h2>EVENT</h2>
                <section className='main-event-container'>
                    <i className="left-btn" onClick={onEventLeftClick}>
                        ⇦
                    </i>
                    <section id='main-event-box'>
                        <div
                            className={(
                                eventViewNum <= event1id && event1id <= eventViewNum + 2)
                                ? "default-event-view"
                                : "default-event-none"}
                            id={event1id}>
                            <div className='event'>
                                <div className="event-img-scale">
                                    <img className='eventImg' src={event1}></img>
                                </div>
                                <p className="event-name">All-Dat 영스엑런칭 이벤트</p>
                                <p className="event-period">2022.06.03 ~ 2022.07.22</p>
                            </div>
                        </div>
                        <div
                            className={(
                                eventViewNum <= event2id && event2id <= eventViewNum + 2)
                                ? "default-event-view"
                                : "default-event-none"}
                            id={event2id}>
                            <div className='event'>
                                <div className="event-img-scale">
                                    <img className='eventImg' src={event2}></img>
                                </div>
                                <p className="event-name">[범죄도시2] 포토플레이 시크릿 컷</p>
                                <p className="event-period">2022.05.10 ~ 2022.06.05</p>
                            </div>
                        </div>
                        <div
                            className={(
                                eventViewNum <= event3id && event3id <= eventViewNum + 2)
                                ? "default-event-view"
                                : "default-event-none"}
                            id={event3id}>
                            <div className='event'>
                                <div className="event-img-scale">
                                    <img className='eventImg' src={event3}></img>
                                </div>
                                <p className="event-name">[브로커]CGV 필름마크</p>
                                <p className="event-period">2022.06.02 ~ 2022.06.26</p>
                            </div>
                        </div>
                        <div
                            className={(
                                eventViewNum <= event4id && event4id <= eventViewNum + 2)
                                ? "default-event-view"
                                : "default-event-none"}
                            id={event4id}>
                            <div className='event'>
                                <div className="event-img-scale">
                                    <img className='eventImg' src={event4}></img>
                                </div>
                                <p className="event-name">[쥬라기 월드: 도미니언]CGV 필름마크</p>
                                <p className="event-period">2022.05.25 ~ 2022.06.19</p>
                            </div>
                        </div>
                    </section>
                    <i className="right-btn" onClick={onEventRightClick}>
                        ⇨
                    </i>
                </section>
            </div>

        </div>
    );
};

export default MainPage;