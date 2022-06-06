import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MainMovieBox from '../../components/MainMovieBox/MainMovieBox'
import './MainPage.css';
import event1 from './EventImg/event1.jpg'
import event2 from './EventImg/event2.jpg'
import event3 from './EventImg/event3.jpg'
import event4 from './EventImg/event4.jpg'


function MainPage() {
    const [movieViewNum, setMovieViewNum] = useState(1);
    const [movie1id, movie2id, movie3id, movie4id, movie5id, movie6id, movie7id, movie8id] = [1, 2, 3, 4, 5, 6, 7, 8];
    const [eventViewNum, setEventViewNum] = useState(1);
    const [event1id, event2id, event3id, event4id] = [1, 2, 3, 4];

    function onMovieLeftClick() {
        if(movieViewNum > 1){
            setMovieViewNum(movieViewNum - 1);
        } else {
            setMovieViewNum(movieViewNum);
        }
    }

    function onMovieRightClick() {
        if(movieViewNum < 5) {
            setMovieViewNum(movieViewNum + 1);
        } else {
            setMovieViewNum(movieViewNum);
        }
    }

    function onEventLeftClick() {
        if(eventViewNum > 1){
            setEventViewNum(eventViewNum - 1);
        } else {
            setEventViewNum(eventViewNum);
        }
    }

    function onEventRightClick() {
        if(eventViewNum < 2) {
            setEventViewNum(eventViewNum + 1);
        } else {
            setEventViewNum(eventViewNum);
        }
    }

    useEffect(() => {
        // while(true) {
            setTimeout(() => {
            if (eventViewNum > 1) {
                setEventViewNum(eventViewNum - 1);
            } else if (eventViewNum < 2) {
                setEventViewNum(eventViewNum + 1);
            }
        }, 3000)
        // }
    }, [])

    return (
        <div>
            <Header/>
            <Navbar/>

            <div className='main-movie-list'>
                <section className='main-movie-container'>
                    <button className="left-btn" onClick={onMovieLeftClick}>
                        ⇦
                    </button>
                    <section id='main-movie-box'>
                        <div className={(movieViewNum <= movie1id && movie1id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie1id}><MainMovieBox no='1'/></div>
                        <div className={(movieViewNum <= movie2id && movie2id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie2id}><MainMovieBox no="2"/></div>
                        <div className={(movieViewNum <= movie3id && movie3id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie3id}><MainMovieBox no="3"/></div>
                        <div className={(movieViewNum <= movie4id && movie4id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie4id}><MainMovieBox no="4"/></div>
                        <div className={(movieViewNum <= movie5id && movie5id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie5id}><MainMovieBox no="5"/></div>
                        <div className={(movieViewNum <= movie6id && movie6id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie6id}><MainMovieBox no="6"/></div>
                        <div className={(movieViewNum <= movie7id && movie7id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie7id}><MainMovieBox no="7"/></div>
                        <div className={(movieViewNum <= movie8id && movie8id <=  movieViewNum+3) ? "default-movie-view" : "default-movie-none"} id={movie8id}><MainMovieBox no="8"/></div>
                    </section>
                    <button className="right-btn" onClick={onMovieRightClick}>
                        ⇨
                    </button>
                </section>
            </div>

            <div className="main-event">
                <h2>EVENT</h2>
                <section className='main-event-container'>
                    <button className="left-btn" onClick={onEventLeftClick}>
                        ⇦
                    </button>
                    <section id='main-event-box'>
                        <div className={(eventViewNum <= event1id && event1id <=  eventViewNum+2) ? "default-event-view" : "default-event-none"} id={event1id}>
                            <div className='event'>
                                <div className="event-img-scale"><img className='eventImg' src={event1}></img></div>
                                <p className="event-name">All-Dat 영스엑런칭 이벤트</p>
                                <p className="event-period">2022.06.03 ~ 2022.07.22</p>
                            </div>
                        </div>
                        <div className={(eventViewNum <= event2id && event2id <=  eventViewNum+2) ? "default-event-view" : "default-event-none"} id={event2id}>
                            <div className='event'>
                                <div className="event-img-scale"><img className='eventImg' src={event2}></img></div>
                                <p className="event-name">[범죄도시2] 포토플레이 시크릿 컷</p>
                                <p className="event-period">2022.05.10 ~ 2022.06.05</p>
                            </div>
                        </div>
                        <div className={(eventViewNum <= event3id && event3id <=  eventViewNum+2) ? "default-event-view" : "default-event-none"} id={event3id}>
                            <div className='event'>
                                <div className="event-img-scale"><img className='eventImg' src={event3}></img></div>
                                <p className="event-name">[브로커]CGV 필름마크</p>
                                <p className="event-period">2022.06.02 ~ 2022.06.26</p>
                            </div>
                        </div>
                        <div className={(eventViewNum <= event4id && event4id <=  eventViewNum+2) ? "default-event-view" : "default-event-none"} id={event4id}>
                            <div className='event'>
                                <div className="event-img-scale"><img className='eventImg' src={event4}></img></div>
                                <p className="event-name">[쥬라기 월드: 도미니언]CGV 필름마크</p>
                                <p className="event-period">2022.05.25 ~ 2022.06.19</p>
                            </div>
                        </div>
                    </section>
                    <button className="right-btn" onClick={onEventRightClick}>
                        ⇨
                    </button>
                </section>
            </div>

        </div>
    );
};


export default MainPage;