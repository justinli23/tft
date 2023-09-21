import React from "react";
import TreeLevel from "./TreeLevel";
import "./ChampTree.css";

function ChampTree(props) {
  console.log(props.champions);
  console.log(props.tiers);
  return (
    <div className="champ-tree">
      <h3 className="header">Champion Tree</h3>
      <div className="levels">
        {props.tiers.map((tier) => {
          return (
            <TreeLevel
              tier={tier}
              key={tier}
              selectedTraits={props.selectedTraits}
              champions={props.champions.filter(
                (champion) => champion.cost === tier
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChampTree;
