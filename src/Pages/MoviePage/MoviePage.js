import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Movie from '../../components/Movie/Movie';

const MoviePage = () => {
    return (
        <section>
            <Header/>
            <Navbar/>
            <Movie/>
        </section>
    );
};

export default MoviePage;