import React from "react";

// Composant SearchBar : champ de recherche contrôlé pour filtrer les alertes
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    // Conteneur centré avec une largeur maximale (max-w-md)
    <div className="w-full max-w-md mx-auto">
      {/* Champ de saisie pour rechercher une alerte */}
      <input
        type="text"
        placeholder="Rechercher une alerte..." // Texte affiché par défaut dans le champ
        value={searchTerm}                   // Valeur actuelle du champ (provenant du state parent)
        onChange={(e) => setSearchTerm(e.target.value)} // Met à jour la valeur lors de la saisie
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Rechercher une alerte" // Pour l'accessibilité (lecteurs d'écran)
      />
    </div>
  );
};

export default SearchBar;
