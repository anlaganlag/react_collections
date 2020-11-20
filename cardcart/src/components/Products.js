import React from "react";
import Product from "./Product";
import { Button } from "react-bootstrap";

class Products extends React.Component {
 
  render() {
    return (
      <div>
        <div className="main-body">
          <div>
            <Button variant="primary" onClick={this.props.onReset}>
              Reset
            </Button>
          </div>
          {this.props.productList.map((product) => (
            <ul>
              {product.id}
              <Product
                key={product.id}
                product={product}
                onIncrement={()=>this.props.onIncrement(product)}  
                onDecrement={()=>this.props.onDecrement(product)}   
                deleteTag={() => this.props.onDelete(product.id)}
              />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
