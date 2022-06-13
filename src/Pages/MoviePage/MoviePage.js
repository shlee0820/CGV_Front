import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Movie from '../../components/Movie/Movie';

import axios from 'axios';
import JoinHeader from '../../components/JoinHeader/JoinHeader';

const MoviePage = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    const userTest = () => {
        // 유저인지 아닌지 판단
        axios
            .get("/get_login_id")
            .then(res => res.data)
            .then(res => {
                console.log(res);
                if (res.islogin === true) {
                    setLoginStatus(true);

                } else {
                    setLoginStatus(false);
                }
            })
    }

    useEffect(() => {
        userTest();
    }, []);

    return (
        <section>
            {
                loginStatus
                    ? <JoinHeader/>
                    : <Header/>
            }
            <Navbar/>
            <Movie/>
        </section>
    );
};

export default MoviePage;