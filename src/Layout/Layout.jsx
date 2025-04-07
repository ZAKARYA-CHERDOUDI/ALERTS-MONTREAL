import React from 'react';
import Header from '../Components/HEADER.JSX'; // attention à la casse du nom du fichier
import Footer from '../Components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
