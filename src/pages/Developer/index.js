import React from 'react';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import Tags from 'components/Tags';
import Tile from 'components/Tile';
import CONTENT from './content';
import './styles.scss';

function DeveloperPage() {
  return (
    <div className="Developer">
      <section className="Developer__section">
        <Header>skillset</Header>
        <Paragraph main={CONTENT.SKILLSET} />
        <Tags list={CONTENT.SKILLS} />
      </section>

      <section className="Developer__section">
        <Header>experience and education</Header>
        <div className="Developer__experience">
          <Tile
            text={[ 'Adam Mickiewicz University in Poznan.', 'Computer Science Bachelor of Engineering' ]}
            subtext="2015-2019"
          />
          <Tile
            text={[ 'Workshops coordinator', '~ Devmeetings' ]}
            subtext="2016-2017"
          />
          <Tile
            text={[ 'Software developer', '~ mTab' ]}
            subtext="2018-2021"
          />
        </div>
      </section>

      <section className="Developer__section">
        <Header>values</Header>
        <Paragraph
          header="attention to details"
          main={CONTENT.VALUES_DETAILS}
        />
        <Paragraph
          header="teamwork"
          main={CONTENT.VALUES_TEAMWORK}
        />
        <Paragraph
          header="discipline"
          main={CONTENT.VALUES_DISCIPLINE}
        />
      </section>

      <section className="Developer__section">
        <Header>projects</Header>
        <p>TODO</p>
      </section>

      <section className="Developer__section">
        <p>Contact - TODO</p>
      </section>

    </div>
  );
}

export default DeveloperPage;
