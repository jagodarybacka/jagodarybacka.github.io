import React from 'react';
import p from 'prop-types';
import './styles.scss';

function Tile({ text, subtext }) {
  const textList = Array.isArray(text) ? text : [text];

  return (
    <div className="Tile">
      {textList.map((item, i) => <p key={i} className="Tile__text">{item}</p>)}
      <span className="Tile__subtext">{subtext}</span>
    </div>
  );
}

Tile.propTypes = {
  text: p.oneOfType([ p.string, p.arrayOf(p.string) ]),
  subtext: p.string
};

export default Tile;
