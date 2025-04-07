import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Ville de Montréal – Avis et alertes. Tous droits réservés.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
