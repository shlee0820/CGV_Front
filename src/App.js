import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
// import react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import pages
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MoviePage from './pages/MoviePage/MoviePage';
import DetailPage from './pages/DetailPage/DetailPage';
import TheaterPage from './pages/TheaterPage/TheaterPage';
import SeatChoicePage from './pages/SeatChoicePage/SeatChoicePage'; // 추후 페이지말고 컴포넌트로 변경가능성
import MyPage from './pages/MyPage/MyPage';
import TheaterChoiceA from './pages/TheaterChoiceA/TheaterChoiceA';
import TheaterChoiceB from './pages/TheaterChoiceB/TheaterChoiceB';

import Header from './components/Header/Header';
import JoinHeader from './components/JoinHeader/JoinHeader';

// 페이지 추가할때마다 route태그 추가하기 !
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/join" element={<RegisterPage/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
                <Route path="/detail" element={<DetailPage/>}/>
                <Route path="/theater" element={<TheaterPage/>}/>
                <Route path="/theater/seat" element={<SeatChoicePage/>}/>
                <Route path="/my" element={<MyPage/>}/>
                <Route path="/theater/choiceMovieA" element={<TheaterChoiceA />}/> {/* <Route path="/theater/choiceMovieB" element={<TheaterChoiceB />}/> */}
            </Routes>
        </Router>
    );
}

export default App;
