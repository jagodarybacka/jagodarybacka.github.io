import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function HomePage() {
  return (
    <div className="Home">
      <div className="Home__circle">
        <p className="Home__description">
          Hi. My name is Berry<br />
          I develop web applications<br />and<br />I teach Javascript
        </p>
      </div>
      <div className="Home__link Home__link--left">
        <Link to="/developer">Developer</Link>
      </div>
      <div className="Home__link Home__link--right">
        <Link to="/mentor">Mentor</Link>
      </div>
      <ul className="Home__link-list">
        <li className="Home__link">
          <a href="mailto: jagoda.er@gmail.com">DM</a>
        </li>
        <li className="Home__link">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jagodarybacka">GH</a>
        </li>
        <li className="Home__link">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jagoda-rybacka">IN</a>
        </li>
        <li className="Home__link">
          <a target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/the_berry">FI</a>
        </li>
      </ul>

    </div>
  );
}

export default HomePage;
