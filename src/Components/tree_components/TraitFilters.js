import React from "react";
import TraitTile from "./TraitTile";
import "./TraitFilters.css";

function TraitFilters(props) {
  return (
    <div>
      <p>{props.title}</p>
      <div className="trait-filters">
        {props.traits.map((trait) => {
          const name = trait.name;
          // const image_data = trait[1].image;
          if (
            !props.search ||
            name.toLowerCase().includes(props.search.toLowerCase())
          ) {
            return (
              <TraitTile
                key={trait.id}
                name={name}
                // full_img={image_data.full}
                currentSelection={props.selectedTraits}
                setSelectedTraits={props.setSelectedTraits}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default TraitFilters;
