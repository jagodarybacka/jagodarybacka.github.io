import React from 'react';
import useMousePosition from './useMousePosition';
import './styles.scss';

const RADIUS = 16;
const SCALE = {
  DEFAULT: 1,
  MIN: 0.5,
  MAX: 1.5
};

function Cursor() {
  const mousePosition = useMousePosition();
  const style = useStyles(mousePosition);

  return <div className="Cursor" style={style}></div>;
}

function useStyles(mousePosition) {
  const { x, y } = mousePosition;
  const hoveredEl = document.elementFromPoint(x, y);
  const getDataAttr = attr => hoveredEl?.dataset[attr] || hoveredEl?.parentElement?.dataset[attr] || '';

  const hoverHidden = getDataAttr('hoverHidden');
  const isSmall = getDataAttr('hoverSmall');
  const isBig = getDataAttr('hoverBig');

  const isHidden = x === null || y === null || hoverHidden;

  const scale = isBig ? SCALE.MAX : isSmall ? SCALE.MIN : SCALE.DEFAULT;

  return {
    top: y - RADIUS,
    left: x - RADIUS,
    opacity: isHidden ? 0 : 1,
    transform: `scale(${ scale })`
  };
}


export default Cursor;
