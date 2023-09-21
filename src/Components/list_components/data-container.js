import React from "react";
import ChampDeck from "./champ-deck";
import TraitList from "./trait-list";

function data_container() {
  return (
    <div>
      <header className="App-header">
        <p>CHAMPION AND TRAIT DATA</p>
        <ChampDeck />
        <TraitList />
      </header>
    </div>
  );
}
export default data_container;
