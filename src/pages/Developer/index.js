import React from 'react';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import Tags from 'components/Tags';
import Tile from 'components/Tile';
import Slider from 'components/Slider';
import Back from 'components/Back';
import Contact from 'pages/shared/Contact';
import CONTENT from './content';
import './styles.scss';


function DeveloperPage() {
  const projects = CONTENT.PROJECTS.map((item, i) => (
    <div className="Developer__project" key={i}>
      <Paragraph
        secondary={item.type}
        header={item.title}
        main={item.description} />
      {item.githubLink && <a className="Developer__link" href={item.githubLink} data-hover-small target="_blank" rel="noopener noreferrer">Github</a>}
      {item.demoLink && <a className="Developer__link" href={item.demoLink} data-hover-small target="_blank" rel="noopener noreferrer">Demo</a>}
    </div>
  ));

  return (
    <div className="Developer">
      <Back />
      <Slider>Developer</Slider>
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

      <section className="Developer__section Developer__projects">
        <Header>projects</Header>
        {projects}
      </section>

      <section className="Developer__section no-margin">
        <Contact />
      </section>
    </div>
  );
}

export default DeveloperPage;
