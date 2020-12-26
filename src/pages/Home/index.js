import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function HomePage() {
  return (
    <div className="Home">
      <div className="Home__circle">
        <p className="Home__description">
          Hi. My name is Berry.<br />
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
          <button>DM</button>
        </li>
        <li className="Home__link">
          <a href="/">GH</a>
        </li>
        <li className="Home__link">
          <a href="/">IN</a>
        </li>
        <li className="Home__link">
          <a href="/">IG</a>
        </li>
      </ul>

    </div>
  );
}

export default HomePage;
