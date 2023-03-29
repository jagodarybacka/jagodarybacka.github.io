import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { ThemeContext } from './App';
import reportWebVitals from './reportWebVitals';

function AppWithContext() {
  const [theme, setTheme] = useState("red")
  return (
    <ThemeContext.Provider value={theme}>
      <App setTheme={setTheme} />
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>,
  document.getElementById('root'));

navigator.permissions.query({ name: 'clipboard-write' });

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
