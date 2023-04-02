import React, { useContext } from 'react';
import HomePage from 'pages/Home';
import BlogPage from 'pages/Blog';
import BlogPost from 'pages/BlogPost';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { THEMES, ThemeContext } from 'themes';
import { RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router-dom';

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


function App({ changeTheme }) {
  const theme = useContext(ThemeContext)

  return (
    <div style={THEMES[theme].css}>
      <Header changeTheme={changeTheme} />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
