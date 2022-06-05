import React, {useState, useEffect, useRef} from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MainMovieBox from '../../components/MainMovieBox/MainMovieBox'
import './MainPage.css';

// 그냥 이벤트 레이아웃 맞추기 위해 예비로 써 둔것.
import first from './MainPageImg/1.jpg';
import two from './MainPageImg/7.jpg';
import three from './MainPageImg/4.jpg';

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
                    <section id='main-movie-big-box'>
                        <MainMovieBox no="1"/>
                        <MainMovieBox no="2"/>
                        <MainMovieBox no="3"/>
                        <MainMovieBox no="4"/>
                        {/* <MainMovieBox no="5"/>
                        <MainMovieBox no="6"/>
                        <MainMovieBox no="7"/>
                        <MainMovieBox no="8"/> */}
                    </section>
                    <i class="right-btn" /*onClick={onClick}*/>
                        ⇨
                    </i>
                </section>
            </div>

            <div className="main-event">
                <h3>EVENT</h3>
                <section className='main-event-container'>
                    <i class="left-btn" /*onClick={onClick}*/>
                        ⇦
                    </i>
                    <section id='main-event-big-box'>
                        <p>MovieBox처럼 이벤트박스 만들어야 함</p>
                        <p>MovieBox처럼 이벤트박스 만들어야 함</p>
                        <p>MovieBox처럼 이벤트박스 만들어야 함</p>
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