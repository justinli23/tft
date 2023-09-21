import React from "react";
import "./ChampHex.css";

function ChampHex(props) {
  const fullImg = "/assets/tft-champion/" + props.image;
  return (
    <div
      className="champhex"
      // className={`champhex ${props.selected ? "none-selected" : ""}`}
      style={{
        backgroundColor: `black`,
        backgroundImage: `url(${fullImg})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `60%`,
      }}
    >
      <div id="champ-name">{props.name}</div>
      <div className="champion-traits">
        <div className="origins">
          {props.origins.map((trait) => {
            return (
              <p className="origin" key={trait}>
                {trait}
              </p>
            );
          })}
        </div>
        <div className="classes">
          {props.classes.map((trait) => {
            return (
              <p className="class" key={trait}>
                {trait}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChampHex;
