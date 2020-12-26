import React from 'react';
import p from 'prop-types';
import './styles.scss';

function Tags({ list }) {
  return (
    <div className="Tags">
      {list.map(item => <span key={item} className="Tags__item">{item}</span>)}
    </div>
  );
}

Tags.propTypes = {
  list: p.arrayOf(p.string)
};

export default Tags;
