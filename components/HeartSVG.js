// components/HeartSVG.js

import React from 'react';

const HeartSVG = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        width="200" // Adjust the width and height to make the heart bigger
        height="200"
    >
        <path d="M12,21.35,10.55,20.2C5.4,15.36,2,12.27,2,8.5,2,5.42,4.42,3,7.5,3c1.74,0,3.41,1.19,4,2.5C11.09,4.19,12.76,3,14.5,3,17.58,3,20,5.42,20,8.5c0,3.77-3.4,6.86-8.55,11.71ZM7.5,5C5.57,5,4,6.57,4,8.5c0,2.86,2.4,5.17,6,9,3.6-3.83,6-6.14,6-9C20,6.57,18.43,5,16.5,5c-1.26,0-2.5,0-3.5.71C11,5,9.76,5,8.5,5Z" />
    </svg>
);

export default HeartSVG;
