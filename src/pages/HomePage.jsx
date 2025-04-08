import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Pour la traduction
import { Alerts } from "../Alerts/Alerts"; // Données simulées des alertes
import DatePicker from "react-datepicker"; // Composant pour choisir les dates
import "react-datepicker/dist/react-datepicker.css"; // Styles du DatePicker
import Header from "../Header"; // Composant contenant les filtres (sujets + arrondissements)

const HomePage = () => {
  const { t } = useTranslation(); // Fonction de traduction

  // États pour les filtres et les recherches
  const [searchTerm, setSearchTerm] = useState(""); // Recherche par mot-clé
  const [selectedBoroughs, setSelectedBoroughs] = useState([]); // Arrondissements sélectionnés
  const [selectedSubjects, setSelectedSubjects] = useState([]); // Sujets sélectionnés
  const [startDate, setStartDate] = useState(null); // Date de début sélectionnée
  const [endDate, setEndDate] = useState(null); // Date de fin sélectionnée

  // Met à jour les sujets et arrondissements sélectionnés depuis le composant Header
  const updateFilters = (newFilters) => {
    if (newFilters.sujets) setSelectedSubjects(newFilters.sujets);
    if (newFilters.arrondissements) setSelectedBoroughs(newFilters.arrondissements);
  };

  // Filtrage des alertes selon tous les critères
  const filteredAlerts = Alerts.filter((alert) => {
    const alertDate = new Date(alert.date); // Conversion de la date d'alerte

    // Vérifie si l'alerte est dans les arrondissements sélectionnés (ou tous si vide)
    const matchesBorough =
      selectedBoroughs.length === 0 || selectedBoroughs.includes(alert.borough);

    // Vérifie si l'alerte est dans les sujets sélectionnés (ou tous si vide)
    const matchesSubject =
      selectedSubjects.length === 0 || selectedSubjects.includes(alert.subject);

    // Vérifie si la date de l'alerte est comprise dans la plage sélectionnée
    const matchesDate =
      (!startDate || alertDate >= startDate) && (!endDate || alertDate <= endDate);

    // Vérifie si le titre ou contenu contient le terme recherché
    const matchesSearch =
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.content.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesBorough && matchesSubject && matchesDate && matchesSearch;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Titre principal de la page */}
      <h1 className="text-3xl font-bold mb-4">
        {t("homePage.mainTitle") || "Avis et alertes"}
      </h1>

      {/* Champ de recherche par mot-clé */}
      <input
        type="text"
        placeholder="Rechercher une alerte..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded border border-gray-300 mb-6"
      />

      {/* Composant Header : sélection des sujets et arrondissements */}
      <Header updateFilters={updateFilters} />

      {/* Sélection de la plage de dates */}
      <div className="flex items-center gap-4 my-4">
        <div>
          <label className="block text-sm text-gray-700">Date de début :</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Sélectionner"
            dateFormat="dd/MM/yyyy"
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Date de fin :</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Sélectionner"
            dateFormat="dd/MM/yyyy"
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* ✅ Cadre récapitulatif des filtres sélectionnés */}
      <div className="bg-gray-100 border border-gray-300 rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Filtres actifs :</h2>

        {/* Liste des sujets sélectionnés ou "Tous" */}
        <p>
          <strong>Sujets :</strong>{" "}
          {selectedSubjects.length > 0 ? selectedSubjects.join(", ") : "Tous"}
        </p>

        {/* Liste des arrondissements sélectionnés ou "Tous" */}
        <p>
          <strong>Arrondissements :</strong>{" "}
          {selectedBoroughs.length > 0 ? selectedBoroughs.join(", ") : "Tous"}
        </p>

        {/* Plage de dates sélectionnée ou "Toutes les dates" */}
        <p>
          <strong>Dates :</strong>{" "}
          {startDate ? `du ${startDate.toLocaleDateString()}` : "Toutes les dates"}{" "}
          {endDate ? `au ${endDate.toLocaleDateString()}` : ""}
        </p>
      </div>

      {/* Liste des alertes filtrées */}
      <div>
        {filteredAlerts.length > 0 ? (
          <ul className="space-y-4">
            {filteredAlerts.map((alert) => (
              <li
                key={alert.id}
                className="border p-4 rounded shadow-sm bg-white"
              >
                <h2 className="text-lg font-semibold">{alert.title}</h2>
                <p className="text-sm text-gray-600">
                  {new Date(alert.date).toLocaleString()}
                </p>
                <p><strong>Arrondissement:</strong> {alert.borough}</p>
                <p><strong>Sujet:</strong> {alert.subject}</p>
                <p className="mt-2">{alert.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          // Message si aucune alerte ne correspond aux critères
          <p className="text-gray-500">
            Aucune alerte trouvée pour les critères sélectionnés.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
