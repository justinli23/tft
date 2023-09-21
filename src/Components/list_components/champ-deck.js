import React from "react";
import ChampCard from "./champ-card";
import champ_data from "../../tft-champion.json";

function champ_deck() {
  return (
    <div>
      <h2>Champions</h2>
      {Object.entries(champ_data.data).map((champ) => {
        const name = champ[1].name;
        const tier = champ[1].tier;
        const full_img = champ[1].image.full;
        return (
          <ChampCard
            key={champ[0]}
            name={name}
            tier={tier}
            full_img={full_img}
          />
        );
      })}
    </div>
  );
}

export default champ_deck;
