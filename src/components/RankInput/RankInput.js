import React, { useEffect, useState } from 'react';
import './RankInput.css';

import RankTextBox from '../RankTextBox/RankTextBox';
import axios from 'axios';

const RankInput = (props) => {

    const [star, setStar] = useState(); // 별점
    const [ranktext, setRankText] = useState(); // 평점 내용
    const [comments, setComments] = useState({}); // 댓글 내용
    const [isPost, setIsPost] = useState(false);

    const onChangeSelect = (e) => {
        setStar(e.currentTarget.value);
    }

    const onRankTextHandler = (e) => { 
        setRankText(e.currentTarget.value);
    }

    const onClickPost = () => {
        // star, ranktext, 영화, 유저 정보를 post로 보내어 등록 
        let body = {
            comment : ranktext,
            point : star,
            movie : props.movieId,
            member : props.userId 
        }
        console.log(body);
        console.log(comments);

        let flag = false;
        for (let c of comments) {
            if( c.name === props.userName ) {
                flag = true;
            }
        }
        
        if ( !flag ) { // 등록 완료라고 뜨겟죠?
            axios.post(`/movie/detail-view?movie_id=${props.movieId}`, body)
            .then(res => {
                console.log(res);
                setIsPost(true);
                setComments([...comments, {
                    "name" : props.userName,
                    "comment" : ranktext ,
                    "_id" : props.userId
                }]);
            });
        } else if (flag) {
            alert('이미 평점을 작성하셨습니다! 기존의 평점이 수정됩니다.');
            axios.put(`/movie/detail-view?movie_id=${props.movieId}`, body)
            .then(res => {
                console.log(res);
                setIsPost(true);
                setComments([{
                    "name" : props.userName,
                    "comment" : ranktext ,
                    "_id" : props.userId
                }]);
            });
        }
    }

    const [rankBoxArr, setRankBoxArr] = useState([]);
    const makeRankTextBox = (arr) => {
        const result = [];
        for (let i = 0; i<arr.length; i++){
            result.push(
                <RankTextBox 
                    name={arr[i].name} 
                    id={arr[i]._id} 
                    comment={arr[i].comment}
                    movieId={props.movieId}  />
            )
        }
        setRankBoxArr([result]);
    } 

    useEffect(() => {
        axios.get(`/movie/detail-view?movie_id=${props.movieId}`)
        .then(res => res.data.comment)
        .then(res => {
            let temp = [];
            for ( let i = 0; i<res.length; i++) {
                temp.push({
                    "name" : res[i].member.name ,
                    "comment" : res[i].comment ,
                    "_id" : res[i]._id
                })
            }
            setComments(temp);
        });
    }, []);

    console.log(comments);

    useEffect(() => {
        makeRankTextBox(comments);
    }, [comments]);
        
    return (
        <section id='rank-box'>
            <p>당신은 회원이시군요. 평점 작성이 가능합니다 !</p>
            <div id='rank-input-box'>
                <article id='r-a'>
                    <select value={star} onChange={onChangeSelect}>
                        <option unselectable>선택</option>
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
                {rankBoxArr}
            </div>
        </section>
    );
};

export default RankInput;