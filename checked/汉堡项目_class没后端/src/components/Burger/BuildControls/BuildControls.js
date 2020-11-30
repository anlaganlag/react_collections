import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "沙拉", type: "salad" },
  { label: "培根", type: "bacon" },
  { label: "芝士", type: "cheese" },
  { label: "牛肉", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
        <p> 当前价格: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}            
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>
           提交订单</button>
    </div>
  );
};

export default buildControls;
