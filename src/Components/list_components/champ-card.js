import React from "react";

function champ_card(props) {
  const imageurl = "/assets/tft-champion/" + props.full_img;
  return (
    <div className="champ-card">
      <p>{props.name}</p>
      <p>Tier: {props.tier}</p>
      <img src={imageurl} alt={props.name}></img>
      <p></p>
    </div>
  );
}

export default champ_card;
