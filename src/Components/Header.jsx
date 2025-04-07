import React, { useState } from "react";

const Header = () => {
  const [showSujets, setShowSujets] = useState(false);
  const [showArrondissements, setShowArrondissements] = useState(false);

  const sujets = [
    "Circulation et transport",
    "Parcs et bâtiments municipaux",
    "Collecte et recyclage",
    "Eau et aqueduc",
    "Travaux publics",
    "Autres"
  ];

  const arrondissements = [
    "Ville-Marie",
    "Rosemont-La Petite-Patrie",
    "Villeray-Saint-Michel-Parc-Extension",
    "Le Plateau-Mont-Royal",
    "Ahuntsic-Cartierville",
    "Outremont"
  ];

  return (
    <div className="p-4 bg-gray-100 shadow-md">
      {/* Boutons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowSujets(!showSujets)}
          className="bg-blue-200 text-blue-900 px-4 py-2 rounded hover:bg-blue-300"
        >
          Sujets
        </button>

        <button
          onClick={() => setShowArrondissements(!showArrondissements)}
          className="bg-green-200 text-green-900 px-4 py-2 rounded hover:bg-green-300"
        >
          Arrondissements
        </button>
      </div>

      {/* Liste des Sujets */}
      {showSujets && (
        <ul className="ml-6 list-disc text-gray-800">
          {sujets.map((sujet, index) => (
            <li key={index}>{sujet}</li>
          ))}
        </ul>
      )}

      {/* Liste des Arrondissements */}
      {showArrondissements && (
        <ul className="ml-6 mt-4 list-disc text-gray-800">
          {arrondissements.map((arr, index) => (
            <li key={index}>{arr}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
