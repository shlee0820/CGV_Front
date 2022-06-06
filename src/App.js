import React from 'react';
import './App.css';
// import react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import pages
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MoviePage from './pages/MoviePage/MoviePage';
import DetailPage from './pages/DetailPage/DetailPage';

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
            </Routes>
        </Router>
    );
}

export default App;
