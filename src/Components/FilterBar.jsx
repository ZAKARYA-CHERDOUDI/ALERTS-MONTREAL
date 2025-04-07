import React from "react";
import FilterSection from "./FilterSection";
import { useAlert } from "../context/AlertContext";

export default function FilterBar() {
  const { filters, updateFilter } = useAlert();

  const handleFilterChange = (filter) => {
    updateFilter(filter);  // Mettre à jour le filtre dans le contexte
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <FilterSection
        title="Arrondissement"
        type="select"
        onChange={handleFilterChange}
        selected={filters.arrondissement}
      />
      <FilterSection
        title="Sujet"
        type="select"
        onChange={handleFilterChange}
        selected={filters.sujet}
      />
      <FilterSection
        title="Date"
        type="date"
        onChange={handleFilterChange}
        selected={{ startDate: filters.startDate, endDate: filters.endDate }}
      />
    </div>
  );
}
