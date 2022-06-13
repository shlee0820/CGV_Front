import React,{useState, useRef, useEffect} from 'react';
import './SeatChoiceBox.css';

const SeatChoiceBox = () => {

    const [people, setPeople] = useState(0);
    const [isClicked, setIsClicked] = useState();
    const currentBtn = useRef();
    const [btnArr, setBtnArr] = useState([]);

    const Style = {
        seat : { width: "30px", height: "30px", margin: "3px", color: "white", backgroundColor: "gray", fontSize: "16px"},
        person : { margin: "25px 3px 3px", backgroundColor: "#D3D4C9", fontSize: "15px", fontWeight: "bolder"},
        clickedperson : { margin: "25px 3px 3px", backgroundColor: "#000", fontSize: "15px", fontWeight: "bolder"}
    }

    const onClickPeople = (e) => {
        // 인원 선택
        const ch_temp = [];
        let color = "";
        for( let i=0; i<5; i++){
            if (e.currentTarget.value === String(i)) color = "#000";
            else color = "#D3D4C9";
            ch_temp.push(<button id={"p"+i} value={i} onClick={onClickPeople} 
                style={{margin: "25px 3px 3px", backgroundColor: color, fontSize: "15px", fontWeight: "bolder"}}>{i}</button>)
        }
        setBtnArr([...ch_temp]);
        setPeople(e.currentTarget.value);
    }

    // * todo 
    // 

    useEffect(() => {
        const temp = [];
        for( let i=0; i<5; i++){
            temp.push(<button id={"p"+i} value={i} onClick={onClickPeople} 
            style={{margin: "25px 3px 3px", backgroundColor: "#D3D4C9", fontSize: "15px", fontWeight: "bolder"}}>{i}</button>)
        }
        setBtnArr([...temp]);
    }, []);
    
    const row = ['A','B','C','D','E'];
    const col = ['1','2','3','4','5'];

    // 추후에 인자를 통해 선택된 좌석 처리
    const makeSeats = () => {
        const s_arr = [];
        for (let i=0; i<5; i++) {
            for (let j=0; j<5; j++) {
                s_arr.push(
                    <button style={Style.seat} value={`${row[i]}${col[j]}`}>{j+1}</button>
                )
            }
            s_arr.push(<br/>)
        }
        return s_arr;
    }

    return (
        <section id='seat-container'>
            <div>인원 / 좌석</div>
            <div>
                <div className='seat-info-box'>
                    <span>일반 {btnArr}</span>
                    <div style={{color: "red"}}>* 최대 4명 선택 가능</div>
                </div>
                <div className='seat-info-box'>
                    상영 정보 와다다닥
                </div>
            </div>
            <div>
                <div id='seat-boxes'>
                    <div>SCREEN</div>
                    <span>현재 선택된 인원 수 : {people} 명</span>
                    <div>
                        <br/>
                        {makeSeats()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeatChoiceBox;