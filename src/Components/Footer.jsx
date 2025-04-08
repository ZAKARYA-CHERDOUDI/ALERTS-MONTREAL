import React from "react";

// Composant Footer affiché en bas de page
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      {/* Conteneur centré avec un peu de padding */}
      <div className="container mx-auto px-4 text-center">
        {/* Texte du footer avec l'année actuelle automatiquement insérée */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Ville de Montréal – Avis et alertes. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
