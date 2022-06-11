import React from 'react';
import './RankTextBox.css';

const RankTextBox = (props) => {
    return (
        <section id='review-box-each'>
            <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.name}</h5>
            <div>{props.comment}</div>
        </section>
    );
};

export default RankTextBox;