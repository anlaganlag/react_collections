import React, { Component, Fragment } from "react";

import Button from "../../UI/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = this.props.ingredients
      ? Object.keys(this.props.ingredients).map(igKey => {
          return (
            <li key={igKey}>
              <span style={{ textTransform: "capitalize" }}> {igKey} </span>:
              {this.props.ingredients[igKey]}
            </li>
          );
        })
      : null;

    return (
      <Fragment>
        <h3>  你的订单 </h3>
        <p>  美味的汉堡需要添加配料: </p>
        <ul> {ingredientSummary} </ul>
        <p>
          <strong> Total Price: {this.props.price.toFixed(2)} </strong>
        </p>
        <p> Continue to Checkout ? </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
