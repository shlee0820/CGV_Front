import React from 'react';
import './SeatChoicePage.css';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SeatChoiceBox from '../../components/SeatChoiceBox/SeatChoiceBox';

const SeatChoicePage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <SeatChoiceBox/>
        </div>
    );
};

export default SeatChoicePage;