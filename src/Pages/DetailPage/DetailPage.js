import React, {useState} from 'react';
import './DetailPage.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import RankInput from '../../components/RankInput/RankInput';

const DetailPage = (props) => {

    // 현재 props는 영화 id 
    // req : 영화 id, res : 상세 정보


    // 평점 작성 누르면 등록 기능 로직
    const [isUser, setIsUser] = useState(true); // 일단 true로

    const onClick = () => {

        // 1. 회원인지 확인 -> 회원 아니면 이용 못함
        // setIsUser(false);
        // 2. 회원이면 평점 작성 진행
        // setIsUser(true);

        // useEffect로 isUser 바뀔때 마다 렌더링
    }

    return (
        <section>
            <Header/>
            <Navbar/>
            {/* 영화 상세 파트 */}
            <section id='detail-top-box'>
                <article style={{width: "30%"}}>
                    <img src='' alt='이미지 없음' />
                </article>
                <article style={{width: "70%"}}>
                    <h3>영화 이름</h3>
                    <div>예매율 : 00%</div><hr/>
                    <div>감독 : 00 / 배우 : 00</div>
                    <div>장르 : 00 / 기타 정보</div>
                    <div>개봉 : 00.00.00</div>
                    <button id='detail-ticket-btn' className='detail-btn'>예매하기</button>
                </article>
            </section>
            {/* 평점 작성 누르는 파트 */}
            <section id='detail-review'>
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
            <section>
                {
                    isUser ?
                        <RankInput/>
                    :<div>
                        나는 유저 아님
                    </div>
                }
            </section>
        </section>
    );
};

export default DetailPage;