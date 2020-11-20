import React from "react";
import { Badge, Button } from "react-bootstrap";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.product.value === 0 ? (
            <Badge variant="warning m-2">Zero</Badge>
          ) : (
            <Badge variant="primary m-2"> {this.props.product.value} </Badge>
          )}
          <Button
            variant="dark m-2"
            size="sm"
            onClick={() => {
              this.props.onIncrement(this.props.product);
            }}
          >
            {" "}
            +{" "}
          </Button>
          {this.props.product.value === 0 ? (
            <Button variant="dark m-2" size="sm" disabled>
              -
            </Button>
          ) : (
            <Button
              variant="dark m-2"
              size="sm"
              onClick={() => {
                this.props.onDecrement(this.props.product);
              }}
            >
              -
            </Button>
          )}
          <Button variant="danger m-2" size="sm" onClick={this.props.deleteTag}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default Product;
