import React from 'react';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import Back from 'components/Back';
import Slider from 'components/Slider';
import Contact from 'pages/shared/Contact';
import CONTENT from './content';
import './styles.scss';

function MentorPage() {
  return (
    <div className="Mentor">
      <Back />
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

      <section className="Mentor__section no-margin">
        <Contact email={CONTENT.EMAIL} />
      </section>

    </div>
  );
}

export default MentorPage;
