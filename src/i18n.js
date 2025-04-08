// Importation des modules nécessaires pour la configuration de la traduction
import i18n from 'i18next'; // Importation de la bibliothèque i18next pour la gestion des traductions
import { initReactI18next } from 'react-i18next'; // Importation du module d'intégration i18next avec React
import fr from './locales/fr.json'; // Importation des traductions en français
import en from './locales/en.json'; // Importation des traductions en anglais

// Initialisation de la configuration de i18next
i18n
  .use(initReactI18next) // Utilisation du module pour intégrer i18next avec React
  .init({
    resources: {
      // Définition des ressources de traduction
      fr: { translation: fr }, // Traductions en français provenant du fichier fr.json
      en: { translation: en }  // Traductions en anglais provenant du fichier en.json
    },
    lng: "fr", // Langue par défaut à charger (ici le français)
    fallbackLng: "en", // Langue de secours (si une traduction n'est pas trouvée, l'anglais sera utilisé)
    interpolation: {
      escapeValue: false // Désactivation de l'échappement des valeurs (les chaînes ne seront pas échappées)
    }
  });

// Exportation de la configuration i18n pour qu'elle soit utilisée dans d'autres parties de l'application
export default i18n;
