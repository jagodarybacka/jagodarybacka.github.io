import React from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const ParallaxElement = ({
  children,
  intensity = 3,
  className = "",
  style = {},
  ...props
}) => {
  const { x, y } = useMousePosition();

  // Calculate parallax offset based on intensity (reduced scale for more subtle effect)
  const parallaxX = x * intensity * 10; // Reduced from 10 to 5 for subtlety
  const parallaxY = y * intensity * 3; // Reduced vertical movement for naturalness

  const parallaxStyle = {
    ...style,
    transform: `translate(${parallaxX}px, ${parallaxY}px)`,
    transition: "transform 0.15s ease-out", // Slightly slower for smoothness
    willChange: "transform", // Optimize for animations
  };

  return (
    <div className={className} style={parallaxStyle} {...props}>
      {children}
    </div>
  );
};

export default ParallaxElement;
