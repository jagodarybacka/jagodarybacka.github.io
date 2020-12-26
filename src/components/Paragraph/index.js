import React from 'react';
import p from 'prop-types';
import './styles.scss';

function Paragraph({ main, header, secondary }) {
  return (
    <div className="Paragraph">
      <h5 className="Paragraph__secondary">{secondary}</h5>
      <h3 className="Paragraph__header">{header}</h3>
      <p className="Paragraph__main">{main}</p>
    </div>
  );
}

Paragraph.propTypes = {
  main: p.string,
  header: p.string,
  secondary: p.string
};

export default Paragraph;
