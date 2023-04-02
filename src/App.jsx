import React, { createContext, useContext } from 'react';
import HomePage from 'pages/Home';
import BlogPage from 'pages/Blog';
import BlogPost from 'pages/BlogPost';
import Footer from 'components/Footer';
import Header from 'components/Header';
import BgBlue from './assets/bg-blue.jpeg'
import BgRed from './assets/bg-red.jpeg'
import BgGreen from './assets/bg-green.jpeg'
import { RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router-dom';

export const THEMES = {
  red: {
    css: {
      "--text-primary": "#510F3D",
      "--text-contrast": "#251C9B",
      "--highlight": "#BEA1FE",
    },
    img: BgRed
  },
  blue: {
    css: {
      "--text-primary": "#3e5365",
      "--text-contrast": "#63032D",
      "--highlight": "#7a8ea0",
    },
    img: BgBlue
  },
  green: {
    css: {
      "--text-primary": "#364B3C",
      "--text-contrast": "#3E694B",
      "--highlight": "#BBA7A5",
    },
    img: BgGreen
  }
}

export const themeNames = Object.keys(THEMES)

export const ThemeContext = createContext()

const router = createHashRouter([{
  path: "/",
  element: <HomePage />
}, {
  path: "/blog",
  element: <BlogPage />
}, {
  path: "/blog/:postID",
  element: <BlogPost />
}])


function App({ setTheme }) {
  const theme = useContext(ThemeContext)
  const getNextTheme = () => themeNames[(themeNames.indexOf(theme) + 1) % themeNames.length]

  return (
    <div style={THEMES[theme].css}>
      <Header setTheme={() => setTheme(getNextTheme())} />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
