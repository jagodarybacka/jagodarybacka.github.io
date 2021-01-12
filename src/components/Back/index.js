import React from 'react';
import { Link } from 'react-router-dom';
import Blob from 'components/Blob';
import './styles.scss';

export default function Back() {
  return (
    <Link to="/">
      <div className="Back">
        <Blob />
        <span className="Back__text">home</span>
      </div>
    </Link>
  );
}
