import React, { useEffect, useState } from 'react';
import './Movie.css';
import MovieBox from '../MovieBox/MovieBox';
import axios from 'axios';

// 무비 차트 부분
const Movie = () => {
    const [movieCount, setMovieCount] = useState(0);
    const [movieInfo, setMovieInfo] = useState([]);

    const getMovie = (option) => {
        let getData;
        if (option === "grade"){
            getData = axios.get("/movie?isGrade=1");  
        }
        else if (option === "advanceRate"){
            getData = axios.get("/movie?isGrade=0");
        }

        getData
        .then(res => res.data.movies)
        .then(res => {
            setMovieCount(res.length);
            setMovieInfo([...res]);
        });
    }

    // get으로 영화 전체 받아오기
    useEffect(() => {
        getMovie("advanceRate");
    }, []);

    const onChangeOrder = (e) => {
        console.log(e.currentTarget.value);
        getMovie(e.currentTarget.value);
    }

    const makeMovieBox = (arr) => {
        const movieArr = [];
        for (let i=0; i<movieCount; i++) {
            movieArr.push(
                <MovieBox 
                no={i+1} 
                id={arr[i]._id}
                name={arr[i].contents.name}
                poster={arr[i].contents.poster}
                release={arr[i].contents.release}
                avgPoint={arr[i].scores.avgPoint}
                />)
        }
        return movieArr;
    }

    return (
        <section className='movie-container'>
            <h3>무비차트</h3>
            <hr/>
            <section style={{textAlign: "right"}}>
                <select id='select-box' onChange={onChangeOrder}>
                    <option value="advanceRate" defaultValue>예매율순</option>
                    <option value="grade">평점순</option>
                </select>
            </section>
            <section id='movie-big-box'>
                {makeMovieBox(movieInfo)}
            </section>
        </section>
    );
};

export default Movie;