import React, { useState } from 'react';
import p from 'prop-types';
import Header from 'components/Header';
import './styles.scss';

export default function Contact({ email }) {
  const [ isCopied, setIsCopied ] = useState(false);
  const copyEmail = () => navigator.clipboard.writeText(email)
    .then(() => setIsCopied(true));

  return (
    <div className="Contact is-centered" onClick={() => copyEmail()} data-hover-big>
      <Header>contact me to work together</Header>
      <p className={`Contact__info ${ isCopied ? '' : 'is-hidden' }`}>Email copied. Drop me a line.</p>
    </div>
  );
}

Contact.propTypes = {
  email: p.string
};
