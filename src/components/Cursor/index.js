/* eslint-disable no-magic-numbers */
import React, { useRef, useEffect } from 'react';
import CircleType from 'circletype';
import useMousePosition from './useMousePosition';
import classnames from 'classnames';
import './styles.scss';

const RADIUS = 16;

function Cursor() {
  const mousePosition = useMousePosition();
  const { style, isHidden, innerText } = useStyles(mousePosition);
  const textEl = useRef(null);

  useEffect(() => {
    if (innerText) {
      const circleText = new CircleType(textEl.current);
      circleText.radius(RADIUS * 2.75);
    }
  }, [ textEl, innerText ]);

  const cursorClasses = classnames({
    'Cursor': true,
    'is-hidden': isHidden
  });

  const textClasses = classnames({
    'Cursor__text': true,
    'is-hidden': !innerText
  });

  return (
    <div className={cursorClasses} style={style}>
      <div className="Cursor__text-wrapper">
        <span ref={textEl} className={textClasses}>{innerText}</span>
      </div>
    </div>
  );
}

function useStyles(mousePosition) {
  const { x, y } = mousePosition;
  const hoveredEl = document.elementFromPoint(x, y);
  const getDataAttr = attr => hoveredEl?.dataset[attr] || hoveredEl?.parentElement?.dataset[attr] || '';

  const innerText = getDataAttr('hoverText');
  const hoverHidden = getDataAttr('hoverHidden');
  const isSmall = getDataAttr('hoverSmall');

  const isHidden = x === null || y === null || hoverHidden;

  let scale = 1;
  if (innerText) {
    scale = 1.4;
  } else if (isSmall) {
    scale = 0.5;
  }

  return {
    innerText,
    style: {
      top: y - RADIUS,
      left: x - RADIUS,
      background: isSmall ? 'white' : 'transparent',
      opacity: isHidden ? 0 : 1,
      transform: `scale(${ scale })`
    }
  };
}


export default Cursor;
