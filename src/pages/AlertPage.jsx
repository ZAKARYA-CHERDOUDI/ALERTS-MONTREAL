import React, { useEffect, useState } from "react"; // Import des hooks React
import { useParams } from "react-router-dom";       // Hook pour accéder aux paramètres de l'URL
import { Alerts } from "../Alerts/Alerts";          // Import des données d'alertes

// Composant AlertPage – affiche les détails d'une alerte en fonction de son ID
const AlertPage = () => {
  // Récupère l'ID de l'alerte depuis l'URL (défini dans la route)
  const { id } = useParams();

  // État local pour stocker les détails de l'alerte sélectionnée
  const [alertDetails, setAlertDetails] = useState(null);

  // useEffect se déclenche au montage du composant ou quand l'ID change
  useEffect(() => {
    // Recherche de l'alerte correspondant à l'ID fourni
    const alert = Alerts.find((alert) => alert.id.toString() === id);

    // Met à jour l'état avec les détails de l'alerte trouvée
    setAlertDetails(alert);
  }, [id]); // Dépendance : s'exécute chaque fois que 'id' change

  // Affichage de chargement si les détails de l'alerte ne sont pas encore disponibles
  if (!alertDetails) {
    return <div>Chargement des détails de l'alerte...</div>;
  }

  // Affichage des détails de l'alerte une fois chargés
  return (
    <div className="alert-page p-6 bg-white rounded-md shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Détails de l'alerte : {alertDetails.title}</h1>
      <p className="mb-2">{alertDetails.content}</p>

      <p className="mb-1">
        <strong>Date :</strong>{" "}
        {new Date(alertDetails.date).toLocaleString("fr-FR", {
          dateStyle: "long",
          timeStyle: "short",
        })}
      </p>

      <p className="mb-1">
        <strong>Arrondissement :</strong> {alertDetails.borough}
      </p>

      <p className="mb-1">
        <strong>Sujet :</strong> {alertDetails.subject}
      </p>

      <p className="mb-1">
        <strong>Adresse :</strong> {alertDetails.address}
      </p>

      {/* Tu peux ajouter d'autres champs si disponibles : urgence, type d'intervention, etc. */}
    </div>
  );
};

export default AlertPage; // Exportation du composant pour utilisation dans l'application
