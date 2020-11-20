import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";

class App extends React.Component {
  state = {
    productList: [
      {
        id: 1,
        value: 0,
        addedToCart: false,
      },
      {
        id: 2,
        value: 0,
        addedToCart: false,
      },
      {
        id: 3,
        value: 0,
        addedToCart: false,
      },
      {
        id: 4,
        value: 0,
        addedToCart: false,
      },
    ],
  };

  deleteTag = (id) => {
    this.setState({
      productList: this.state.productList.filter(
        (product) => product.id !== id
      ),
    });
  };

  resetValue = () => {
    this.setState({
      productList: this.state.productList.map((product) => {
        product.value = 0;
        return product;
      }),
    });
  };

  handleIncrement = (product) => {
    const productList = [...this.state.productList];
    const index = productList.indexOf(product);
    productList[index] = { ...product };
    productList[index].value++;
    this.setState({ productList });
  };

  handleDecrement = (product) => {
    const productList = [...this.state.productList];

    const index = productList.indexOf(product);
    productList[index] = { ...product };

    if (productList[index].value > 0) {
      productList[index].value--;
    }
    
    this.setState({ productList });
  };

  render() {
    return (
      <div>
        <NavBar
          cartItems={
            this.state.productList.filter((item) => item.value > 0).length
          }
        />
        <Products
          onReset={this.resetValue}
          productList={this.state.productList}
          onDelete={this.deleteTag}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
