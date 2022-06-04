import React from 'react';
import './App.css';
// import react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import pages
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MoviePage from './pages/MoviePage/MoviePage';

// 일단 페이지 4개만 파놓음 !
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/join" element={<RegisterPage/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
