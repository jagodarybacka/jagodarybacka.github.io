import React from 'react';
import { Link } from 'react-router-dom';
import Blob from 'components/Blob';
import './styles.scss';

function HomePage() {
  return (
    <div className="Home">
      <Blob />
      <h1 className="Home__title">Berry Rybacka</h1>
      <div className="Home__pages-list">
        <div data-hover-small className="Home__link">
          <Link to="/developer">Developer</Link>
        </div>
        <div data-hover-small className="Home__link">
          <Link to="/mentor">Mentor</Link>
        </div>
      </div>
      <ul className="Home__link-list">
        <li className="Home__link">
          <a data-hover-small href="mailto: berry.rybacka@gmail.com">Email</a>
        </li>
        <li className="Home__link">
          <a data-hover-small target="_blank" rel="noopener noreferrer" href="https://github.com/jagodarybacka">Github</a>
        </li>
        <li className="Home__link">
          <a data-hover-small target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jagoda-rybacka">LinkedIn</a>
        </li>
        <li className="Home__link">
          <a data-hover-small target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/the_berry">Fiverr</a>
        </li>
      </ul>

    </div>
  );
}

export default HomePage;
