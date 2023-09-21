import React from "react";
import "./TraitTile.css";

function TraitTile(props) {
  function handleSelectedTraits() {
    const copy = [...props.currentSelection];
    if (copy.includes(props.name)) {
      const filtered = copy.filter((word) => word !== props.name);
      props.setSelectedTraits(filtered);
    } else {
      copy.push(props.name);
      props.setSelectedTraits(copy);
    }
  }
  const imageurl = "/assets/tft-trait/" + props.full_img;
  return (
    <div className="trait-tile" onClick={handleSelectedTraits}>
      {props.full_img ? <img src={imageurl} alt={props.name}></img> : null}
      <div>{props.name}</div>
    </div>
  );
}

export default TraitTile;
