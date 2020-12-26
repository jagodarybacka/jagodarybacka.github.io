import React from 'react';
import p from 'prop-types';
import './styles.scss';

function Header({ children }) {
  return (
    <h1 className="Header">{children}</h1>
  );
}

Header.propTypes = {
  children: p.string
};

export default Header;
