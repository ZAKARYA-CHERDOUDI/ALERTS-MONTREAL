import React from "react"; // Importation de React pour créer le composant

// Définition du composant NotFoundPage
const NotFoundPage = () => {
  return (
    <div>
      {/* Titre indiquant que la page n'a pas été trouvée */}
      <h1>Page Not Found</h1>

      {/* Message d'erreur explicatif */}
      <p>La page que vous cherchez n'existe pas.</p>
    </div>
  );
};

export default NotFoundPage; // Exportation du composant pour qu'il puisse être utilisé ailleurs dans l'application
