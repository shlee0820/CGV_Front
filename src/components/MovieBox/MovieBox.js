import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './MovieBox.css';

// 영화 리스트 박스 하나
const MovieBox = (props) => {
    
    const navigate = useNavigate();

    const onClick = (e) => {
        let temp = e.currentTarget.name;
        navigate('/detail', {
            state: {id: temp}
        });
    }

    return (
        <div className='movie-box'>
            <div id='no-box'>No.{props.no}</div>
            <img id='movie-img' 
            src={props.poster} 
            alt='이미지 없음'
            name={props.id}
            onClick={onClick}
            />
            <strong>{props.name}</strong>
            <div className='text'>예매율 00% &nbsp;&nbsp;평점 {props.avgPoint}</div>
            <div className='text'>{props.release} 개봉</div>
            <button id='ticket-btn'>예매하기</button>
        </div>
    );
};

export default MovieBox;