import React from 'react';
import useMousePosition from './useMousePosition';
import './styles.scss';

const RADIUS = 16;

function Cursor() {
  const { x, y } = useMousePosition();
  const style = {
    top: y - RADIUS,
    left: x - RADIUS,
    opacity: x === null || y === null ? 0 : 1
  };

  return (
    <div className="Cursor" style={style}></div>
  );
}


export default Cursor;
