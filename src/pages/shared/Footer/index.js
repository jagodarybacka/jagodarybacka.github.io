import React from 'react';
import p from 'prop-types';

import './styles.scss';

function Footer({ style }) {
  return (
    <footer className="Footer" style={style}>
      <p className="Footer__text">You can find me here</p>
      <div className="Footer__links">
        <a className="Footer__link" href="mailto: jagoda.er@gmail.com">Email</a>
        <a className="Footer__link" target="_blank" rel="noopener noreferrer" href="https://github.com/jagodarybacka">Github</a>
        <a className="Footer__link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jagoda-rybacka">Linkedin</a>
        <a className="Footer__link" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/the_berry">Fiverr</a>
      </div>

      <p className="Footer__text">❤ Portfolio made by Jagoda Berry Rybacka in 2021 ❤</p>
    </footer>
  );
}


Footer.propTypes = {
  style: p.object
};

export default Footer;
