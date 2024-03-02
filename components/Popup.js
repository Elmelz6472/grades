// components/Popup.js

import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <h2 className={styles.title}>A very necessary remainder</h2>
                <div className={styles.content}>
                    <p>You're worth so much more than insignificant grades. No matter what happens, you'll always hold a special place in my heart. Even if you may feel undervalued, I cherish you for all your unique qualities.</p>
                    <p>🐝 The greatest bee of all time. 🐝</p>
                </div>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
