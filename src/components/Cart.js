import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../style/cart.css';

class Cart extends React.Component {
  render() {
    return(
      <div className="Cart">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Cart