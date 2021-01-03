import React from 'react';
import p from 'prop-types';
import './styles.scss';

function Slider({ children, turnLeft, turnRight }) {
  return (
    <div className="Slider">
      {children}
    </div>
  );
}

Slider.propTypes = {
  children: p.string,
  turnLeft: p.bool,
  turnRight: p.bool
};

export default Slider;
