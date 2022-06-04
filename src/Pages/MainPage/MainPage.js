import React from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MovieBox from '../../components/MovieBox/MovieBox'
import './MainPage.css';

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <section className='main-movie-container'>
                <section id='main-movie-big-box'>
                    <MovieBox no="1"/>
                    <MovieBox no="2"/>
                    <MovieBox no="3"/>
                    <MovieBox no="4"/>
                    <MovieBox no="5"/>
                    <MovieBox no="6"/>
                    <MovieBox no="7"/>
                    <MovieBox no="8"/>
                </section>
            </section>
            <section className="main-event">
                
            </section>
        </div>
    );
};

export default MainPage;