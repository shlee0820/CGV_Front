import React from 'react';
import './MainMovieBox.css';

// 영화 리스트 박스 하나
const MovieBox = (props) => {

    // 이미지 클릭 시 상세페이지 이동 구현하기

    return (
        <div className='main-movie-box' id={props.no}>
            <div id='main-no-box'>No.{props.no}</div>
            <div id='main-movie-img'>영화 이미지</div>
            <div className='main-text'>영화 제목</div>
            <div className='main-text'>평점/예매율</div>
            <div className='main-text'>예매 버튼</div>
        </div>
    );
};

export default MovieBox;