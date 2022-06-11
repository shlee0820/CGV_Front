import React,{useState, useRef} from 'react';
import './SeatChoiceBox.css';

const SeatChoiceBox = () => {

    const [people, setPeople] = useState(0);
    const [isClicked, setIsClicked] = useState(true);
    const currentBtn = useRef();

    // const Style = 

    const onClickPeople = (e) => {
        setIsClicked(!isClicked);
        if( isClicked ) {
            e.currentTarget.style = "background: black";
            setPeople(e.currentTarget.value);
        } else {
            e.currentTarget.style = "background: #D3D4C9";
            setPeople(0);
        }
    }
    
    const makeBtn = () => {
        const arr = [];
        for( let i=0; i<5; i++){
            arr.push(<button value={i} onClick={onClickPeople} 
                style={{
                    margin: "25px 3px 3px", 
                    backgroundColor: "#D3D4C9", 
                    fontSize: "15px",
                    fontWeight: "bolder"
                }}>{i}</button>)
        }
        return arr;
    }

    return (
        <section id='seat-container'>
            <div>인원 / 좌석</div>
            <div>
                <div className='seat-info-box'>
                    <span>일반 {makeBtn()}</span>
                    <div style={{color: "red"}}>* 최대 8명 선택 가능</div>
                </div>
                <div className='seat-info-box'>
                    상영 정보
                </div>
            </div>
        </section>
    );
};

export default SeatChoiceBox;