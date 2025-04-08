// Importation des dépendances nécessaires pour React et le routage
import React from "react"; // Import de React pour utiliser JSX
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importation du Router et des composants nécessaires pour la gestion des routes
import { AlertProvider } from "./context/AlertContext"; // Importation du provider AlertContext pour partager l'état des alertes à travers l'application
//import Layout from "./Layout/Layout"; // Importation du composant Layout qui contient la structure de base de l'application (header, footer, etc.)
import Homepage from "./pages/HomePage"; // Importation de la page d'accueil
import AlertPage from "./pages/AlertPage"; // Importation de la page de détails des alertes
import NotFoundPage from "./pages/NotFoundPage"; // Importation de la page de 404 (page non trouvée)
import './i18n' // Importation de la configuration de la localisation (traductions)
import './index.css'; // Importation des styles globaux de l'application
import './app.css'; // Importation des styles spécifiques à l'application

// Composant principal de l'application
function App() {
  console.log("App rendered!"); // Vérification dans la console que l'application se rend correctement à chaque changement

  // Retourne la structure de l'application
  return (
    // AlertProvider permet de rendre l'état des alertes disponible dans toute l'application
    <AlertProvider>
      {/* Router gère la navigation entre les différentes pages de l'application */}
      <Router>
        {/* Layout contient l'interface commune (comme le header et le footer) pour toutes les pages */}
       
          {/* Définition des routes de l'application */}
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path="/" element={<Homepage />} />
            {/* Route dynamique pour afficher une alerte spécifique en fonction de son ID */}
            <Route path="/alert/:id" element={<AlertPage />} />
            {/* Route pour afficher une page "Not Found" lorsque l'URL ne correspond à aucune route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
       
      </Router>
    </AlertProvider>
  );
}

// Exportation du composant pour qu'il soit utilisé dans d'autres parties de l'application
export default App;
