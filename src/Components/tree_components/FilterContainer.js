import React from "react";
import { useState, useEffect } from "react";
import TraitFilters from "./TraitFilters";
import "./FilterContainer.css";

function FilterContainer(props) {
  const [origins, setOrigins] = useState([]);
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");

  function handleUpdateSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetch("http://localhost:8000/origins")
      .then((resp) => resp.json())
      .then((data) => {
        setOrigins(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/classes")
      .then((resp) => resp.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const originTitle = "Origins";
  const classTitle = "Classes";
  return (
    <div className="trait-selector">
      <p>Trait Filters</p>
      <form className="form">
        <label>Search: </label>
        <input type="text" value={search} onChange={handleUpdateSearch}></input>
      </form>
      <TraitFilters
        title={originTitle}
        traits={origins}
        search={search}
        selectedTraits={props.selectedTraits}
        setSelectedTraits={props.setSelectedTraits}
      />
      <TraitFilters
        title={classTitle}
        traits={classes}
        search={search}
        selectedTraits={props.selectedTraits}
        setSelectedTraits={props.setSelectedTraits}
      />
    </div>
  );
}

export default FilterContainer;
