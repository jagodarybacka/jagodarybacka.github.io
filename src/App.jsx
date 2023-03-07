import React from 'react';
import HomePage from 'pages/Home';
import Footer from 'components/Footer';
import Header from 'components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
