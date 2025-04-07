import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // pour afficher/cacher la recherche

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-md py-3 px-6 flex items-center justify-between">
        {/* Gauche : Logo + Montréal + Menu */}
        <div className="flex items-center gap-4">
          <img src="../Logo-de-montreal.jpg"className="h-10" alt="Montréal" />
          
          <span className="font-bold text-lg">Menu</span>
          <button onClick={toggleMenu} className="ml-2 text-black">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Milieu : Loupe (recherche) */}
        <div className="flex-grow mx-4 relative">
          {!searchOpen ? (
            // Loupe seule
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-black"
              aria-label="Ouvrir la recherche"
            >
              <Search className="w-6 h-6" />
            </button>
          ) : (
            // Champ de recherche
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full max-w-md px-3 py-1 border rounded border-gray-300"
              autoFocus
              onBlur={() => setSearchOpen(false)} // ferme quand on sort du champ
            />
          )}
        </div>

        {/* Droite : Compte + Langue */}
        <div className="flex items-center gap-4">
          <button className="bg-gray-200 px-4 py-1 rounded text-black">Mon Compte</button>
          <select
            onChange={handleLanguageChange}
            defaultValue={i18n.language}
            className="bg-gray-200 px-2 py-1 rounded text-black"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      {/* Menu déroulant sous l'entête */}
      {menuOpen && (
        <nav className="bg-gray-100 px-6 py-3 shadow-inner">
          <ul className="flex flex-col md:flex-row gap-4 text-gray-800">
            <li><a href="/categories" className="hover:text-blue-600">Catégories</a></li>
            <li><a href="/lieux" className="hover:text-blue-600">Lieux de service</a></li>
            <li><a href="/renseignements" className="hover:text-blue-600">Renseignements</a></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
