import React from 'react';
import './App.css';
import Products from  "./components/Products"

function App() {
  return (
    <div className="container">
      <h1>Marketplace Shopping Cart</h1>
      <hr />
      <div className="row">
        <div className="col-md-8">
        <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
        </div>
        <div className="col-md-4">
        Content 2
        </div>
      </div>
    </div>
  );
}

export default App;
