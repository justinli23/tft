import React from "react";
import "./ActiveFilters.css";

function ActiveFilters(props) {
  function handleOnClear() {
    props.setSelectedTraits([]);
  }

  function handleOnClick(event) {
    const copy = [...props.selectedTraits];
    const filtered = copy.filter((trait) => trait !== event.target.value);
    props.setSelectedTraits(filtered);
  }

  return (
    <div className="active-filters-container">
      <p className="label">Active</p>
      <div className="active-filters">
        {props.selectedTraits.map((trait) => {
          return (
            <button
              className="selectedTrait"
              onClick={handleOnClick}
              value={trait}
              name={trait}
              key={trait}
            >
              {trait}
            </button>
          );
        })}
      </div>
      {props.selectedTraits.length !== 0 ? (
        <button className="clear" onClick={handleOnClear}>
          CLEAR FILTERS
        </button>
      ) : null}
    </div>
  );
}

export default ActiveFilters;
