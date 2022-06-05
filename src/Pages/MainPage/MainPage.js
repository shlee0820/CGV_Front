import React, {useState, useEffect, useRef} from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MainMovieBox from '../../components/MainMovieBox/MainMovieBox'
import './MainPage.css';
import event1 from './EventImg/event1.jpg'
import event2 from './EventImg/event2.jpg'
import event3 from './EventImg/event3.jpg'
import event4 from './EventImg/event4.jpg'


function MainPage() {
    // useRef로 슬라이드 도전 해보는 중 근데 잘 안됨...
    // const carouselDivs = useRef([]);
    // const currentCa = useRef(1);

    // function onClick(e) {
    //     if (e.target.className === "left-btn") {
    //         currentCa.current = currentCa.current === 1
    //             ? currentCa.current
    //             : currentCa.current - 1;
    //         console.log(currentCa);
    //     } else if (e.target.className === "right-btn") {
    //         currentCa.current = currentCa.current === 8
    //             ? currentCa.current
    //             : currentCa.current + 1;
    //         console.log(currentCa);

    //     }
    // }

    // carouselDivs.current.forEach((caDiv, index) => {
    //         if (index + 1 === currentCa.current) {
    //             caDiv.classList.add("selected");
    //         } else {
    //             caDiv.classList.remove("selected");
    //         }
    // });

    return (
        <div>
            <Header/>
            <Navbar/>

            <div className='main-movie-list'>
                <section className='main-movie-container'>
                    <i class="left-btn" /*onClick={onClick}*/>
                        ⇦
                    </i>
                    <section id='main-movie-box'>
                        <div className="default-view" id='m1'><MainMovieBox no="1"/></div>
                        <div className="default-view" id='m2'><MainMovieBox no="2"/></div>
                        <div className="default-view" id='m3'><MainMovieBox no="3"/></div>
                        <div className="default-view" id='m4'><MainMovieBox no="4"/></div>
                        <div className="default-none" id='m5'><MainMovieBox no="5"/></div>
                        <div className="default-none" id='m6'><MainMovieBox no="6"/></div>
                        <div className="default-none" id='m7'><MainMovieBox no="7"/></div>
                        <div className="default-none" id='m8'><MainMovieBox no="8"/></div>
                    </section>
                    <i class="right-btn" /*onClick={onClick}*/>
                        ⇨
                    </i>
                </section>
            </div>

            <div className="main-event">
                <h2>EVENT</h2>
                <section className='main-event-container'>
                    <i class="left-btn" /*onClick={onClick}*/>
                        ⇦
                    </i>
                    <section id='main-event-box'>
                        <div className="event default-view" id="e1">
                            <img className='eventImg' src={event1}></img>
                            <p className="event-name">All-Dat 영스엑런칭 이벤트</p>
                            <p className="event-period">2022.06.03 ~ 2022.07.22</p>
                        </div>
                        <div className="event default-view" id="e2">
                            <img className='eventImg' src={event2}></img>
                            <p className="event-name">[범죄도시2] 포토플레이 시크릿 컷</p>
                            <p className="event-period">2022.05.10 ~ 2022.06.05</p>
                        </div>
                        <div className="event default-view" id="e3">
                            <img className='eventImg' src={event3}></img>
                            <p className="event-name">[브로커]CGV 필름마크</p>
                            <p className="event-period">2022.06.02 ~ 2022.06.26</p>
                        </div>
                        <div className="event default-none" id="e4">
                            <img className='eventImg' src={event4}></img>
                            <p className="event-name">[쥬라기 월드: 도미니언]CGV 필름마크</p>
                            <p className="event-period">2022.05.25 ~ 2022.06.19</p>
                        </div>
                    </section>
                    <i class="right-btn" /*onClick={onClick}*/>
                        ⇨
                    </i>
                </section>
            </div>

        </div>
    );
};


export default MainPage;