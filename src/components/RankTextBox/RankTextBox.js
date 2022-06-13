import axios from 'axios';
import React from 'react';
import './RankTextBox.css';

const RankTextBox = (props) => {

    let body = {
        // comment : ranktext,
        // point : star,
        recommendMember : props._id,
        recommendCount : 1,
        movie : props.movieId,
        member : props._id 
    }

    const onClickRecommand = () => {
        // axios.put((), body)
        // .then()
    }

    return (
        <section id='review-box-each'>
            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.name}</h5>
            <div>{props.comment}</div>
            <button onClick={onClickRecommand}>추천</button>
        </section>
    );
};

export default RankTextBox;