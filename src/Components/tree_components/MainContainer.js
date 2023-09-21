import React, { useState, useEffect, createContext } from "react";
import ChampTree from "./ChampTree";
import FilterContainer from "./FilterContainer";
import "./MainContainer.css";
import ActiveFilters from "./ActiveFilters";
function MainContainer() {
  const [selectedTraits, setSelectedTraits] = useState([]);

  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/champions")
      .then((resp) => resp.json())
      .then((data) => setChampions(data));
  }, []);

  const tiers = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div className="main-container">
        <ActiveFilters
          setSelectedTraits={setSelectedTraits}
          selectedTraits={selectedTraits}
        />
        <FilterContainer
          setSelectedTraits={setSelectedTraits}
          selectedTraits={selectedTraits}
        />
        {champions.length ? (
          <ChampTree
            selectedTraits={selectedTraits}
            tiers={tiers}
            champions={champions}
          />
        ) : (
          <div>"LOADING..."</div>
        )}
      </div>
    </div>
  );
}

export default MainContainer;
