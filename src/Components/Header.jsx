import React, { useState } from "react";

const Header = ({ updateFilters }) => {
  // États pour afficher ou masquer les listes
  const [showSujets, setShowSujets] = useState(false);
  const [showArrondissements, setShowArrondissements] = useState(false);

  // États pour garder la liste des éléments sélectionnés
  const [selectedSujets, setSelectedSujets] = useState([]);
  const [selectedArrondissements, setSelectedArrondissements] = useState([]);

  // Données des filtres
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

  // Fonction pour gérer les changements dans les sujets
  const handleSujetsChange = (sujet) => {
    // Vérifie si le sujet est déjà sélectionné
    const isSelected = selectedSujets.includes(sujet);

    let updatedSujets;
    if (isSelected) {
      // Si déjà sélectionné, on le retire de la liste
      updatedSujets = selectedSujets.filter((item) => item !== sujet);
    } else {
      // Sinon, on l’ajoute à la liste
      updatedSujets = [...selectedSujets, sujet];
    }

    // Met à jour l’état local et informe le parent
    setSelectedSujets(updatedSujets);
    updateFilters({ sujets: updatedSujets });
  };

  // Fonction pour gérer les changements dans les arrondissements
  const handleArrondissementsChange = (arr) => {
    const isSelected = selectedArrondissements.includes(arr);

    let updatedArr;
    if (isSelected) {
      updatedArr = selectedArrondissements.filter((item) => item !== arr);
    } else {
      updatedArr = [...selectedArrondissements, arr];
    }

    setSelectedArrondissements(updatedArr);
    updateFilters({ arrondissements: updatedArr });
  };

  return (
    <div className="p-4 bg-gray-100 shadow-md">
      {/* Boutons pour afficher/masquer les listes */}
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

      {/* Liste des sujets avec cases à cocher */}
      {showSujets && (
        <ul className="ml-6 list-disc text-gray-800">
          {sujets.map((sujet, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedSujets.includes(sujet)} // coche si déjà sélectionné
                  onChange={() => handleSujetsChange(sujet)} // gère l'ajout/retrait
                  className="mr-2"
                />
                {sujet}
              </label>
            </li>
          ))}
        </ul>
      )}

      {/* Liste des arrondissements avec cases à cocher */}
      {showArrondissements && (
        <ul className="ml-6 mt-4 list-disc text-gray-800">
          {arrondissements.map((arr, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedArrondissements.includes(arr)} // coche si déjà sélectionné
                  onChange={() => handleArrondissementsChange(arr)} // gère l'ajout/retrait
                  className="mr-2"
                />
                {arr}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
