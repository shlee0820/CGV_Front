import React, { useEffect, useState } from 'react';
import './RankInput.css';

import RankTextBox from '../RankTextBox/RankTextBox';
import axios from 'axios';

const RankInput = (props) => {

    const [star, setStar] = useState(); // 별점
    const [ranktext, setRankText] = useState(); // 평점 내용
    const [comments, setComments] = useState([]); // 댓글 내용
    const [isPost, setIsPost] = useState(false);

    const onChangeSelect = (e) => {
        setStar(e.currentTarget.value);
    }

    const onRankTextHandler = (e) => { 
        setRankText(e.currentTarget.value);
    }

    const onClickPost = () => {
        document.getElementById("rank-input").value = "";
        // star, ranktext, 영화, 유저 정보를 post로 보내어 등록 
        let body = {
            comment : ranktext,
            point : star,
            movie : props.movieId,
            member : props.userId 
        }
        console.log(body);
        axios.post(`/movie/detail-view?movie_id=${props.movieId}`, body)
        .then(res => {
            setIsPost(true);
        }); // 등록 완료라고 뜨겟죠?
    }

    const makeRankTextBox = (arr) => {
        const result = [];
        for (let i = 0; i<arr.length; i++){
            result.push(
                <RankTextBox name={arr[i].member.name} comment={arr[i].comment}  />
            )
        }
        return result;
    } 

    useEffect(() => {
        axios.get(`/movie/detail-view?movie_id=${props.movieId}`)
        .then(res => res.data.comment)
        .then(res => {
            setComments(res);
        });
    }, []);

    
    return (
        <section id='rank-box'>
            <p>당신은 회원이시군요. 평점 작성이 가능합니다 !</p>
            <div id='rank-input-box'>
                <article id='r-a'>
                    <select value={star} onChange={onChangeSelect}>
                        <option value='1' defaultValue>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </article>
                <article id='r-b'>
                    <input id="rank-input" type="text" value={ranktext} onChange={onRankTextHandler} placeholder='  평점을 작성해주세요 !'/>
                    <button onClick={onClickPost}>등록</button>
                </article>
            </div>
            <br/><br/><hr/><br/>
            {/* id, 텍스트 */}
            <div id='review-text-container'>
                {makeRankTextBox(comments)}
            </div>
        </section>
    );
};

export default RankInput;