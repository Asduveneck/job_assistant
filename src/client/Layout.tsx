import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import Footer from 'components/Footer';
import Navbar from './components/Navbar';
import Router from './Router';

const Layout = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default Layout;
