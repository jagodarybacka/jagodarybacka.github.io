import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContext, useTheme } from 'themes';
import reportWebVitals from './reportWebVitals';

function AppWithContext() {
  const [theme, changeTheme] = useTheme()

  return (
    <ThemeContext.Provider value={theme}>
      <App changeTheme={changeTheme} />
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
