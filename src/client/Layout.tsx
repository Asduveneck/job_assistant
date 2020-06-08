import React from 'react';

// import Footer from 'components/Footer';
import Navbar from './components/Navbar';
import Router from './Router';

const Layout = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Router />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
