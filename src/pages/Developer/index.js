import React from 'react';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import './styles.scss';

function DeveloperPage() {
  return (
    <div className="DeveloperPage">
      <Header>skillset</Header>
      <Paragraph
        main={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`}
      />
    </div>
  );
}

export default DeveloperPage;
