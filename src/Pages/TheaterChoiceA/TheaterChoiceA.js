import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './TheaterChoiceA.css';

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'

function TheaterChoiceA() {
    const [amTimeMovie, pmTimeMovie] = [1, 2];
    const [choice, setChoice] = useState(false);

    function timeclick(event) {
        setChoice(event.target.id);
        
    }

    return (
        <div>
            <Header/>
            <Navbar/>
            <div className='movieANDtime'>
                <div className='movie'>
                    <div className='boxHeader'>영화</div>
                    <div className='items'>
                        <Link className="movieLink" to="/theater/choiceMovieA">
                            <div className='Amovie'>
                                <span>12&nbsp;&nbsp;&nbsp;</span>
                                <span>브로커&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </Link>
                        <Link className="movieLink" to="/theater/choiceMovieB">
                            <div className='Bmovie'>
                                <span>15&nbsp;&nbsp;&nbsp;</span>
                                <span>범죄도시 2&nbsp;&nbsp;&nbsp;</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='time'>
                    <div className='boxHeader'>시간</div>
                    <div className='movieAtimes'>
                        <div className='movieAtimesBox'>
                            <div className='movieinfo'>
                                <span id='twoD'>2D</span>
                                <span id='locate'>1관 1층</span>
                                <span id='totalSeat'>(총 25석)</span>
                            </div>
                            <div className='timetable'>
                                <div className='amTime'>
                                    <span className={(amTimeMovie == choice) ? 'selectedtext' : 'timetext'} onClick={timeclick}
                                        id={amTimeMovie}>11:00
                                    </span>
                                    <span className='seattext'>여석</span>
                                </div>
                                <div className='pmTime'>
                                    <span className={(pmTimeMovie == choice) ? 'selectedtext' : 'timetext'} onClick={timeclick}
                                        id={pmTimeMovie}>18:00
                                    </span>
                                    <span className='seattext'>여석</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottomBigBox'>
                <div className='bottomBox'>
                    <div className='bottomleft'>
                        <div className='poster'></div>
                        <div className='bottominfo'></div>
                        <div className='step'></div>
                    </div>
                    <div className='bottomright'>
                        <Link to={(choice) ? '/theater/seatchoice' : '/theater/choiceMovieA'} className='bottombtn'>
                            <div className={(choice) ? 'active_btn' : 'btn'}>
                                <p>➜</p>
                                <p>좌석 선택</p>
                            </div>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheaterChoiceA;
