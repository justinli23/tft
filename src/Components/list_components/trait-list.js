import React from "react";
import trait_data from "../../tft-trait.json";
import Trait from "../trait-tile";

function trait_list() {
  return (
    <div>
      <h2>Traits</h2>
      <div className="trait">
        {Object.entries(trait_data.data).map((trait) => {
          const name = trait[1].name;
          const image_data = trait[1].image;
          return (
            <Trait key={trait[1].id} name={name} full_img={image_data.full} />
          );
        })}
        {/* image data is object with its own keys and vals */}
      </div>
    </div>
  );
}

export default trait_list;
