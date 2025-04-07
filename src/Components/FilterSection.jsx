import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterSection = ({ title, type, onChange, selected }) => {
  const handleChange = (e) => {
    onChange({ [title.toLowerCase()]: e.target.value });
  };

  return (
    <div className="filter-section">
      <label>{title}</label>
      {type === "select" && (
        <select onChange={handleChange} value={selected}>
          <option value="all">Tous</option>
          {/* Options ici */}
        </select>
      )}
      {type === "date" && (
        <div>
          <DatePicker
            selected={selected.startDate}
            onChange={(dates) => onChange({ startDate: dates[0], endDate: dates[1] })}
            startDate={selected.startDate}
            endDate={selected.endDate}
            selectsRange
            inline
            dateFormat="dd/MM/yyyy"
          />
        </div>
      )}
    </div>
  );
};

export default FilterSection;
