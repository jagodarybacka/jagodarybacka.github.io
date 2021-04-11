import { useLayoutEffect, useState } from 'react';

const useMousePosition = () => {
  const [ mousePosition, setMousePosition ] = useState({ x: null, y: null });

  useLayoutEffect(() => {
    document.onmousemove = ev => setMousePosition({ x: ev.clientX, y: ev.clientY });
  });

  return { x: mousePosition.x, y: mousePosition.y };
};

export default useMousePosition;
