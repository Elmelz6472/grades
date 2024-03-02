// components/LandingPage.js

import React, { useState } from 'react';
import styles from './styles.module.css';
import HeartSVG from './HeartSVG';
import Popup from './Popup';

const LandingPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={styles.container} style={{ backgroundColor: '#FFCCCC' }}>
            <HeartSVG className={`${styles.heart} ${styles.rotate}`} />
            <h1 className={`${styles.heading} ${styles.bounce}`}>You Matter</h1>
            <p className={`${styles.text} ${styles.float}`}>Grades mean nothing in my eyes.</p>
            <button className={styles.popupButton} onClick={togglePopup}>See message</button>
            {isPopupOpen && <Popup onClose={togglePopup} />}
        </div>
    );
};

export default LandingPage;
