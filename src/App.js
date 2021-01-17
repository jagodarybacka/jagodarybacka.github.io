import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from 'pages/Home';
import DeveloperPage from 'pages/Developer';
import MentorPage from 'pages/Mentor';
import Footer from 'pages/shared/Footer';
import Cursor from 'components/Cursor';
import isMobileBrowser from 'mixins/isMobileBrowser';
import './App.scss';

const ROUTES = {
  MENTOR: '/mentor',
  DEVELOPER: '/developer',
  HOME: '/'
};

const COLORS = {
  LIGHT: '#f20089',
  DARK: '#2d00f7'
};

function App() {
  const location = useLocation();
  const isMobile = isMobileBrowser();
  const [ borderStyle, setBorderStyles ] = useState({});
  const [ footerStyle, setFooterStyles ] = useState({});

  useEffect(() => {
    const getBorderStyle = (top, bottom) => ( { borderImage: `linear-gradient(to bottom, ${ top } , ${ bottom }) 1` });
    switch (location.pathname) {
    case ROUTES.MENTOR:
      setBorderStyles(getBorderStyle(COLORS.LIGHT, COLORS.DARK));
      setFooterStyles({ background: COLORS.DARK });
      break;
    case ROUTES.DEVELOPER:
      setBorderStyles(getBorderStyle(COLORS.DARK, COLORS.LIGHT ));
      setFooterStyles({ background: COLORS.LIGHT });
      break;
    default:
      setBorderStyles({});
    }
  }, [location]);


  return (
    <div className="App" style={borderStyle}>
      {isMobile ? '' : <Cursor />}
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
      {location.pathname === ROUTES.HOME || <Footer style={footerStyle}/>}
    </div>
  );
}

export default App;
