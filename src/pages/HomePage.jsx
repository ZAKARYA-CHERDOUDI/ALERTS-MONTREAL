import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alerts } from "../Alerts/Alerts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

const boroughs = [
  "Ahuntsic-Cartierville", "Anjou", "Côte-des-Neiges–Notre-Dame-de-Grâce", "L'Île-Bizard–Sainte-Geneviève",
  "Lachine", "LaSalle", "Le Plateau-Mont-Royal", "Le Sud-Ouest", "Mercier–Hochelaga-Maisonneuve",
  "Montréal-Nord", "Outremont", "Pierrefonds-Roxboro", "Rivière-des-Prairies–Pointe-aux-Trembles",
  "Rosemont-La Petite-Patrie", "Saint-Laurent", "Saint-Léonard", "Verdun", "Ville-Marie",
  "Villeray-Saint-Michel-Parc-Extension"
];

const subjects = [
  "Déchets et recyclage", "Eau et aqueduc", "Urgence", "Parcs et bâtiments municipaux", "Circulation et transport"
];

const MultiSelectDropdown = ({ label, options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const resetSelection = () => {
    setSelected([]); 
  };

  return (
    <div className="relative mb-4">
      <div
        className="border-2 border-blue-500 rounded-lg px-4 py-2 cursor-pointer bg-white hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.length > 0 ? selected.join(", ") : `Choisir ${label.toLowerCase()}`}
      </div>
      {isOpen && (
        <div className="absolute bg-white border shadow-md mt-1 max-h-60 overflow-y-auto z-20 w-full rounded-lg">
          {options.map((option) => (
            <div
              key={option}
              className={`px-3 py-2 hover:bg-blue-100 cursor-pointer ${
                selected.includes(option) ? "bg-blue-200 font-semibold" : ""
              }`}
              onClick={() => handleToggle(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      <button
        className="mt-2 text-blue-500"
        onClick={resetSelection}
      >
        Réinitialiser {label.toLowerCase()}
      </button>
    </div>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBoroughs, setSelectedBoroughs] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false); 

  const filteredAlerts = Alerts.filter((alert) => {
    const alertDate = new Date(alert.date);
    const matchesBorough =
      selectedBoroughs.length === 0 || selectedBoroughs.includes(alert.borough);
    const matchesSubject =
      selectedSubjects.length === 0 || selectedSubjects.includes(alert.subject);
    const matchesDate =
      (!startDate || alertDate >= startDate) && (!endDate || alertDate <= endDate);
    const matchesSearch =
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.content.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesBorough && matchesSubject && matchesDate && matchesSearch;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("homePage.mainTitle") || "Avis et alertes"}</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher une alerte..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded border border-gray-300 mb-6"
      />

      {/* Filtres */}
      <div className="bg-gray-50 p-4 rounded border mb-6 space-y-4">
        <div className="mb-4">
          <MultiSelectDropdown
            label="Sujets"
            options={subjects}
            selected={selectedSubjects}
            setSelected={setSelectedSubjects}
          />
        </div>
        <div className="mb-4">
          <MultiSelectDropdown
            label="Arrondissements"
            options={boroughs}
            selected={selectedBoroughs}
            setSelected={setSelectedBoroughs}
          />
        </div>
        <div className="relative mb-4">
          <label className="block font-medium mb-1">Date</label>
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center gap-2 border-2 border-blue-500 px-4 py-2 rounded-full bg-white hover:bg-gray-100 transition w-full text-left"
          >
            <Calendar size={18} />
            {startDate && endDate
              ? `Du ${startDate.toLocaleDateString()} au ${endDate.toLocaleDateString()}`
              : "Choisir une plage de dates"}
          </button>
          {showDatePicker && (
            <div className="absolute bg-white border shadow-md mt-2 z-20 rounded p-2">
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(dates) => {
                  const [start, end] = dates;
                  setStartDate(start);
                  setEndDate(end);
                }}
                isClearable
                dateFormat="dd/MM/yyyy"
                inline
              />
            </div>
          )}
        </div>
      </div>

      {/* Résultats */}
      <div>
        {filteredAlerts.length > 0 ? (
          <ul className="space-y-4">
            {filteredAlerts.map((alert) => (
              <li key={alert.id} className="border p-4 rounded shadow-sm bg-white">
                <h2 className="text-lg font-semibold">{alert.title}</h2>
                <p className="text-sm text-gray-600">{new Date(alert.date).toLocaleString()}</p>
                <p><strong>Arrondissement:</strong> {alert.borough}</p>
                <p><strong>Sujet:</strong> {alert.subject}</p>
                <p className="mt-2">{alert.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Aucune alerte trouvée pour les critères sélectionnés.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
