import React, { Component } from 'react';
import Products from './components/products';

import './App.css';

class App extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/lista')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data.products })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Products products={this.state.products} /> 
    );
  }
}

export default App;
