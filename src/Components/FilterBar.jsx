import React from "react";
import FilterSection from "./FilterSection"; // Composant enfant responsable d'un type de filtre
import { useAlert } from "../context/AlertContext"; // Hook personnalisé pour accéder aux filtres via le contexte

export default function FilterBar() {
  // Récupération des filtres actuels et de la fonction pour les mettre à jour via le contexte
  const { filters, updateFilter } = useAlert();

  // Fonction appelée lorsqu'un filtre est modifié (arrondissement, sujet ou date)
  const handleFilterChange = (filter) => {
    updateFilter(filter);  // Mise à jour du filtre dans le contexte global
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      {/* Filtre par arrondissement */}
      <FilterSection
        title="Arrondissement"     // Titre du filtre affiché
        type="select"              // Type de filtre : menu déroulant
        onChange={handleFilterChange} // Fonction déclenchée lors du changement
        selected={filters.arrondissement} // Valeur sélectionnée actuelle
      />

      {/* Filtre par sujet */}
      <FilterSection
        title="Sujet"
        type="select"
        onChange={handleFilterChange}
        selected={filters.sujet}
      />

      {/* Filtre par plage de dates */}
      <FilterSection
        title="Date"
        type="date"
        onChange={handleFilterChange}
        selected={{ startDate: filters.startDate, endDate: filters.endDate }} // Plage de dates actuelle
      />
    </div>
  );
}
