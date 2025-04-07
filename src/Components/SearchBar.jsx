import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Rechercher une alerte..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Rechercher une alerte"
      />
    </div>
  );
};

export default SearchBar;
