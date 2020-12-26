import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import DeveloperPage from 'pages/Developer';
import MentorPage from 'pages/Mentor';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/developer">
          <DeveloperPage />
        </Route>
        <Route path="/mentor">
          <MentorPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
