import React from "react";
import ParallaxElement from "./components/ParallaxElement";
import { BlobCollection } from "./components/BlobShapes";

function App() {
  return (
    <div className="app-container">
      <nav>
        <a
          href="https://github.com/jagodarybacka"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a href="mailto:berry.rybacka@gmail.com">let's talk</a>
      </nav>

      <div className="profile-section">
        <div className="profile-container">
          <BlobCollection />
          <ParallaxElement
            intensity={0.5}
            className="profile-picture"
          ></ParallaxElement>
          <ParallaxElement
            intensity={1.2}
            className="sticker sticker-left"
          ></ParallaxElement>
          <ParallaxElement
            intensity={1.5}
            className="sticker sticker-right"
          ></ParallaxElement>
        </div>
        <div className="profile-text">
          <h1>Jagoda Rybacka</h1>
          <h3>
            senior fullstack developer /<br />
            technical consultant /<br />
            project management
          </h3>
          <p>
            fullstack apps | blockchain | ecommerce | 3d design
            <br />
            team leadership | technical recruitment
          </p>
          <a href="https://calendly.com/berry-rybacka/30min" className="cta">
            work with me <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
