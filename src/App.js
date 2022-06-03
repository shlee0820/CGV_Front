import React from 'react';
// import react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import pages
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MoviePage from './pages/MoviePage/MoviePage';

// 일단 페이지 3개만 파놓음 !
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
