import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alerts } from "../Alerts/Alerts"; // Importer les alertes depuis le fichier Alerts.js

const AlertPage = () => {
  const { id } = useParams(); // Extraction de l'ID de l'alerte
  const [alertDetails, setAlertDetails] = useState(null);

  useEffect(() => {
    // Récupérer les détails de l'alerte en filtrant l'alerte par son ID
    const alert = Alerts.find((alert) => alert.id.toString() === id);
    setAlertDetails(alert); // Stockage des détails de l'alerte dans l'état
  }, [id]); // Relance l'effet chaque fois que l'ID change

  // Affichage pendant que les données sont en cours de chargement
  if (!alertDetails) {
    return <div>Chargement des détails de l'alerte...</div>;
  }

  return (
    <div className="alert-page">
      <h1>Détails de l'alerte : {alertDetails.title}</h1>
      <p>{alertDetails.content}</p>
      <p><strong>Date:</strong> {new Date(alertDetails.date).toLocaleString()}</p>
      <p><strong>Arrondissement:</strong> {alertDetails.borough}</p>
      <p><strong>Sujet:</strong> {alertDetails.subject}</p>
      <p><strong>Adresse:</strong> {alertDetails.address}</p>
      {/* Vous pouvez ajouter d'autres détails selon ce qui est nécessaire */}
    </div>
  );
};

export default AlertPage;
