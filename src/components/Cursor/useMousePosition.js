import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [ mousePosition, setMousePosition ] = useState({ x: null, y: null });

  const updateMouse = ev => requestAnimationFrame(() => setMousePosition({ x: ev.clientX, y: ev.clientY }));


  useEffect(() => {
    window.addEventListener('mousemove', updateMouse);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
    };
  }, []);

  return { x: mousePosition.x, y: mousePosition.y };
};

export default useMousePosition;
