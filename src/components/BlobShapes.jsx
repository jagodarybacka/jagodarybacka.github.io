import React from "react";
import ParallaxElement from "./ParallaxElement";

const AnimatedBlob = ({
  size = 100,
  color = "var(--text)",
  animationDelay = 0,
  intensity = 0.8,
  className = "",
  style = {},
}) => {
  return (
    <ParallaxElement
      intensity={intensity}
      className={`animated-blob ${className}`}
      style={{
        ...style,
        "--size": `${size}px`,
        "--color": color,
        "--delay": `${animationDelay}s`,
      }}
    />
  );
};

const BlobCollection = () => {
  return (
    <>
      {/* Background blobs with subtle movement */}
      <AnimatedBlob
        size={120}
        color="#283618"
        intensity={0.3}
        animationDelay={0}
        className="blob-1"
        style={{
          position: "absolute",
          top: "5%",
          left: "-5%",
          opacity: 0.06,
          zIndex: -1,
        }}
      />
      <AnimatedBlob
        size={80}
        color="#f4e580ff"
        intensity={0.4}
        animationDelay={1.5}
        className="blob-2"
        style={{
          position: "absolute",
          top: "6%",
          right: "23%",
          opacity: 0.2,
          zIndex: -1,
          filter: "blur(2px)",
        }}
      />
      <AnimatedBlob
        size={60}
        color="#283618"
        intensity={0.6}
        animationDelay={3}
        className="blob-3"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "25%",
          opacity: 0.05,
          zIndex: -1,
        }}
      />
      <AnimatedBlob
        size={90}
        color="#606c38"
        intensity={0.5}
        animationDelay={2}
        className="blob-4"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
          opacity: 0.08,
          zIndex: -1,
        }}
      />
      <AnimatedBlob
        size={70}
        color="#fefae0"
        intensity={0.7}
        animationDelay={4}
        className="blob-5"
        style={{
          position: "absolute",
          top: "80%",
          left: "60%",
          opacity: 0.07,
          zIndex: -1,
          filter: "blur(1.5px)",
        }}
      />
    </>
  );
};

export { AnimatedBlob, BlobCollection };
