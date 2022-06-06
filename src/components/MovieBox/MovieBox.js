import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './MovieBox.css';

// 영화 리스트 박스 하나
const MovieBox = (props) => {
    
    const navigate = useNavigate();

    // 영화 정보를 props로 받아 출력해주기

    // 이미지 클릭 시 상세페이지 이동 구현하기(전달 인자는 영화 id)
    const onClick = (e) => {
        // 상세페이지 이동  상세페이지에 id전달 
        // navigate('/detail', {id:id})
        navigate('/detail');
    }

    return (
        <div className='movie-box'>
            <div id='no-box'>No.{props.no}</div>
            <img id='movie-img' 
            src='https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg' 
            alt='이미지 없음'
            onClick={onClick}
            />
            <div className='text'>영화 제목</div>
            <div className='text'>예매율 00% </div>
            <div className='text'>개봉일</div>
            <button id='ticket-btn'>예매하기</button>
        </div>
    );
};

export default MovieBox;