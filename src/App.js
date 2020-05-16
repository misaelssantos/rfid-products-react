import React, { Component } from 'react';
import Products from './components/products';
import { properties } from './properties.js';
import './App.css';

class App extends Component {

  state = {
    products: []
  }

  callLista() {
    fetch(properties.LISTA_REST_SERVICE)
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data.products })
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.callLista();
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 2000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    this.callLista();
  }

  render() {
    return (
      <Products products={this.state.products}/> 
    );
  }
}

export default App;
