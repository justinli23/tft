import React from "react";
import ChampHex from "./ChampHex";
import champ_data from "../../tft-champion.json";
import "./TreeLevel.css";

function TreeLevel(props) {
  return (
    <div className="level-container">
      <div className="tree-level">
        {props.champions.map((champion) => {
          let selected = "none-selected";
          let traitsSelected = 0;
          const classSelected = champion.traits.classes.some((t) =>
            props.selectedTraits.includes(t)
          );
          const originSelected = champion.traits.origins.some((t) =>
            props.selectedTraits.includes(t)
          );
          props.selectedTraits.forEach((trait) => {
            if (
              champion.traits.classes.includes(trait) ||
              champion.traits.origins.includes(trait)
            ) {
              traitsSelected++;
            }
          });
          if (traitsSelected > 1) {
            selected = "multiple-selected";
          } else if (originSelected) {
            selected = "origin-selected";
          } else if (classSelected) {
            selected = "class-selected";
          }
          //Fix for case: Champion names in json do not have single apostrophes (Cho'gath)
          let cleanName = champion.name.replace("'", "");
          cleanName = cleanName.replace(" ", "");
          const image =
            champ_data?.data["TFT9_" + cleanName]?.image.full || cleanName;
          return (
            <div
              className={`hexwrapper ${selected} ${
                selected === "none-selected" ? "unselected" : "selected"
              }`}
              key={champion.name}
            >
              <ChampHex
                key={champion.name}
                image={image}
                name={champion.name}
                origins={champion.traits.origins}
                classes={champion.traits.classes}
              />
            </div>
          );
        })}
      </div>
      <p>{props.tier}</p>
    </div>
  );
}

export default TreeLevel;
