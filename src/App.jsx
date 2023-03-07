import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import Blog from 'pages/Blog';
import Footer from 'components/Footer';
import Header from 'components/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
