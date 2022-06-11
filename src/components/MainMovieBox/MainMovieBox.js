import React from 'react';
import './MainMovieBox.css';

// 영화 리스트 박스 하나
const MovieBox = (props) => {

    // 이미지 클릭 시 상세페이지 이동 구현하기

    return (
        <div className='main-movie-box'>
            <img id='main-movie-img' 
            src={props.poster} 
            alt='이미지 없음'
            name={props.id}
            />
            <strong>{props.name}</strong>
            <div className='main-text'>예매율 00% </div>
        </div>
    );
};

export default MovieBox;