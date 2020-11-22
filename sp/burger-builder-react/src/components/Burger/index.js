import React from "react";

import classes from "./style.css";
import BurgerIngredient from "./BurgerIngredient";

const burger = props => {
  let transformedIngredients = (
    <div>   无法载入配料,   请检查连接并刷新</div>
  );
  if (props.ingredients) {
    transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p> 请开始你的汉堡表演!</p>;
    }
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
