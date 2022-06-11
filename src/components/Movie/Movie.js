import React, { useEffect, useState } from 'react';
import './Movie.css';
import MovieBox from '../MovieBox/MovieBox';
import axios from 'axios';

// 무비 차트 부분
const Movie = () => {
    const [movieCount, setMovieCount] = useState(0);
    const [movieInfo, setMovieInfo] = useState([]);

    // get으로 영화 전체 받아오기
    useEffect(() => {
        axios.get("/movie")
        .then(res => res.data.movies)
        .then(res => {
            setMovieCount(res.length);
            setMovieInfo([...res]);
        });
    }, []);

    function makeMovieBox(arr) {
        const MovieBoxArr = [];
        console.log(arr);
        for (let i=0; i<movieCount; i++) {
            MovieBoxArr.push(
                <MovieBox 
                no={i+1} 
                id={arr[i]._id}
                name={arr[i].contents.name}
                poster={arr[i].contents.poster}
                release={arr[i].contents.release}
                />)
        }
        console.log(MovieBoxArr);
        //console.log(movieInfo[0].contents.name);
        return MovieBoxArr;
    }

    return (
        <section className='movie-container'>
            <h3>무비차트</h3>
            <hr/>
            <section style={{textAlign: "right"}}>
                <select id='select-box'>
                    <option defaultValue>예매율순</option>
                    <option >평점순</option>
                </select>
            </section>
            <section id='movie-big-box'>
                {/* map 함수 써서 영화 개수만큼 돌리기, 인자는 영화 하나의 정보 */}
                {makeMovieBox(movieInfo)}
            </section>
        </section>
    );
};

export default Movie;