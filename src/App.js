import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from 'pages/Home';
import DeveloperPage from 'pages/Developer';
import MentorPage from 'pages/Mentor';
import './App.scss';

const ROUTES = {
  MENTOR: '/mentor',
  DEVELOPER: '/developer'
};

function App() {
  const location = useLocation();
  const [ styles, setStyles ] = useState({});

  useEffect(() => {
    switch (location.pathname) {
    case ROUTES.MENTOR:
      setStyles({ borderColor: '#cb8e7e', backgroundColor: '#000000' });
      break;
    case ROUTES.DEVELOPER:
      setStyles({ borderColor: '#253439', backgroundColor: '#000000' });
      break;
    default:
      setStyles({});
    }
  }, [location]);

  return (
    <div className="App" style={styles}>
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
