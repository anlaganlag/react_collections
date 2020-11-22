import React from "react";

import classes from "./style.css";
import BuildControl from "./BuildControl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const buildControls = (props) => {
  let controls = [
    { label: "沙拉", type: "salad" },
    { label: "培根", type: "bacon" },
    { label: "芝士", type: "cheese" },
    { label: "牛肉", type: "meat" },
  ];

  const sum = Object.keys(props.ingredients)
    .map((igKey) => {
      return props.ingredients[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);
  const able = sum > 0 || !props.isAuth;
  const orderDecision = props.isAuth
    ? props.ordered
    : () => props.history.push("/auth");

  return (
    <div className={classes.BuildControls}>
      <p>
         当前价格: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          ingredients={props.ingredients}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!able}
        onClick={orderDecision}
      >
        {props.isAuth ? "现在下单" : "登录后下单"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.userId,
});

export default connect(mapStateToProps)(withRouter(buildControls));
