import React, {useEffect, useState} from 'react';
import './DetailPage.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import RankInput from '../../components/RankInput/RankInput';

import { useLocation } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {

    const location = useLocation();
    // req : 영화 id, res : 상세 정보
    const [movieInfo, setMovieInfo] = useState({});

    useEffect(()=>{
        let { id } = location.state;

        axios.get(`/movie/detail-view?movie_id=${id}`)
        .then(res => res.data)
        .then(res => {
            let movie = res.movie.contents;
            setMovieInfo({"name": movie.name, 
            "poster": movie.poster,
            "director" : movie.director, 
            "actor" : movie.actor, 
            "genre" : movie.genre, 
            "release" : movie.release,
            "movie_id" : res.movie._id,
            "avgPoint" : res.movie.scores.avgPoint
            });
        })
    }, [])


    // 평점 작성 누르면 등록 기능 로직
    const [isUser, setIsUser] = useState(undefined); 
    const [userId, setUserId] = useState("");

    const onClick = () => {
        axios.get("/get_login_id")
        .then(res => res.data)
        .then(res => {
            console.log(res);
            if (res.islogin) {
                setIsUser(true);
                setUserId(res.member[0]._id);
            } else {
                setIsUser(false);
                alert("로그인 후 사용할 수 있는 기능입니다.");
            }
        })
    }

    return (
        <section>
            <Header/>
            <Navbar/>
            {/* 영화 상세 파트 */}
            <section className='center' id='detail-top-box'>
                <article style={{width: "30%", height: "280px"}}>
                    <img src={movieInfo.poster} alt='이미지 없음'
                    style={{width: "90%", height: "100%"}} />
                </article>
                <article style={{width: "70%"}}>
                    <h3>{movieInfo.name}</h3>
                    <div>예매율 : 00% &nbsp;&nbsp; 평점 : {movieInfo.avgPoint}점</div><hr/>
                    <div>감독 : {movieInfo.director} / 배우 : {movieInfo.actor}</div>
                    <div>장르 : {movieInfo.genre} / 기타 정보</div>
                    <div>개봉 : {movieInfo.release}</div>
                    <button id='detail-ticket-btn' className='detail-btn'>예매하기</button>
                </article>
            </section>
            {/* 평점 작성 누르는 파트 */}
            <section className='center' id='detail-review'>
                <div id='review-text-box'>
                    <div style={{fontSize: "1.0rem"}}>관람일 포함 7일 이내 관람평을 남기시면 <span style={{color: "#FB4357"}}>CJ ONE 20P</span>가 적립됩니다.</div>
                    <span style={{fontSize: "0.8em"}}>00명의 실관람객이 평가해주셨습니다.</span>
                </div>
                <div id='review-btn-box'>
                    <button id='detail-rank-btn' className='detail-btn' onClick={onClick}>평점 작성</button>
                    <button id='detail-my-rank-btn' className='detail-btn'>내 평점</button>
                </div>
            </section>
            {/* 평점 작성 파트 */}
            <section className='center' id='detail-review-write'>
                {
                    isUser ?
                        <RankInput userId={userId} movieId={movieInfo.movie_id}/>
                    :
                    null
                }
            </section>
        </section>
    );
};

export default DetailPage;