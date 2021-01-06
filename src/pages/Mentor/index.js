import React from 'react';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import Slider from 'components/Slider';
import CONTENT from './content';
import './styles.scss';

function MentorPage() {
  return (
    <div className="Mentor">
      <Slider>Mentor</Slider>
      <section className="Mentor__section">
        <Header>about</Header>
        <Paragraph main={CONTENT.ABOUT} />
      </section>

      <section className="Mentor__section">
        <Header>motivation</Header>
        <Paragraph main={CONTENT.MOTIVATION} />
      </section>

      <section className="Mentor__section">
        <Header>values</Header>
        <Paragraph
          header="one on one sessions"
          main={CONTENT.VALUES_SESSIONS} />
        <Paragraph
          header="giving you time to grow "
          main={CONTENT.VALUES_TIME} />
        <Paragraph
          header="much more than just the code"
          main={CONTENT.VALUES_EXPERIENCE} />
      </section>

      <section className="Mentor__section">
        <Header>contact me to become my mentee</Header>
      </section>

    </div>
  );
}

export default MentorPage;
