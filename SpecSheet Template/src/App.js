import React, { Component } from "react";
import Bleed from "./Bleed";
import SheetBody from "./sheetBody";
import Header from "./Header";
import Footer from "./Footer";
import client from "./client";
import { dash42, superS36 } from "./keys";

class App extends Component {
  state = {};

  componentDidMount() {
    client
      .getEntry(superS36)
      .then(data => this.setState({ data: data }))
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.data) {
      return "loading...";
    } else {
      const { fields: product } = this.state.data;
      return (
        <Bleed>
          <Header />
          <SheetBody product={product} />
          <h1 className="largeName">{product.productName}</h1>
          <Footer product={product} />
        </Bleed>
      );
    }
  }
}

export default App;
