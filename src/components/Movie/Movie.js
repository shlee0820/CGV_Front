import React from 'react';
import './Movie.css';
import MovieBox from '../MovieBox/MovieBox';

// 무비 차트 부분
const Movie = () => {
    return (
        <section className='movie-container'>
            <h3>무비차트</h3>
            <hr/>
            <section style={{textAlign: "right"}}>
                <select id='select-box'>
                    <option selected>예매율순</option>
                    <option >평점순</option>
                </select>
            </section>
            <section id='movie-big-box'>
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
    );
};

export default Movie;