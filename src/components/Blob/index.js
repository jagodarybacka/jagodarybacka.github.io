import React from 'react';
import './styles.scss';

function Blob() {
  return (
    <div className="Blob">
      <div className="Blob__wrapper">
        <div className="Blob__part"></div>
        <div className="Blob__part"></div>
        <div className="Blob__part"></div>
      </div>
      <svg>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Blob;
