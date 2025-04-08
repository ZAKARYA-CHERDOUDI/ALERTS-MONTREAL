import React, { createContext, useState, useContext } from "react";

// Création du contexte des alertes
const AlertContext = createContext();

// Hook personnalisé pour accéder au contexte
export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  // L'état des filtres avec des valeurs par défaut
  const [filters, setFilters] = useState({
    arrondissement: "all", // Valeur par défaut pour l'arrondissement
    sujet: "all",          // Valeur par défaut pour le sujet
    startDate: "",         // Valeur par défaut pour la date de début
    endDate: "",           // Valeur par défaut pour la date de fin
  });

  // Fonction pour valider et mettre à jour les filtres
  const updateFilter = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <AlertContext.Provider value={{ filters, updateFilter }}>
      {children}
    </AlertContext.Provider>
  );
};
