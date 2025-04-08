import React from "react";
import DatePicker from "react-datepicker"; // Composant de sélection de date
import "react-datepicker/dist/react-datepicker.css"; // Styles de DatePicker

// Composant réutilisable pour afficher un filtre (select ou date)
const FilterSection = ({ title, type, onChange, selected }) => {
  // Fonction appelée lorsqu'une option est sélectionnée dans un menu déroulant
  const handleChange = (e) => {
    // Appelle la fonction parent avec le nouveau filtre sous forme d'objet
    // Exemple : { arrondissement: "Verdun" } si title = "Arrondissement"
    onChange({ [title.toLowerCase()]: e.target.value });
  };

  return (
    <div className="filter-section">
      {/* Affichage du titre du filtre */}
      <label className="block font-medium mb-1">{title}</label>

      {/* Si le type est "select", afficher un menu déroulant */}
      {type === "select" && (
        <select
          onChange={handleChange}
          value={selected}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="all">Tous</option>
          {/* À personnaliser : insérer dynamiquement les options selon le filtre */}
        </select>
      )}

      {/* Si le type est "date", afficher un sélecteur de plage de dates */}
      {type === "date" && (
        <div className="bg-white rounded shadow p-2">
          <DatePicker
            selected={selected.startDate}               // Date de début
            onChange={(dates) =>
              onChange({ startDate: dates[0], endDate: dates[1] }) // Met à jour les deux dates
            }
            startDate={selected.startDate}              // Début de plage
            endDate={selected.endDate}                  // Fin de plage
            selectsRange                               // Active la sélection de plage
            inline                                      // Affiche le calendrier directement
            dateFormat="dd/MM/yyyy"                    // Format d'affichage
          />
        </div>
      )}
    </div>
  );
};

export default FilterSection;
