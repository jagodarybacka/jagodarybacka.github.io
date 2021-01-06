import React from 'react';
import p from 'prop-types';
import './styles.scss';

function Slider({ children, turnLeft, turnRight }) {
  return (
    <div className="Slider">
      <h4 className="Slider__secondary">Berry as a</h4>
      <h1 className="Slider__main">{children}</h1>
    </div>
  );
}

Slider.propTypes = {
  children: p.string,
  turnLeft: p.bool,
  turnRight: p.bool
};

export default Slider;
