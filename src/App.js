import React from 'react';
import './App.css';
import Products from  "./components/Products"

function App() {

  const [products, setProducts] = React.useState([])
  const [filteredProducts, setFilteredProducts] = React.useState([])
  console.log("products : ", products)
  console.log("filteredProducts : ", filteredProducts)

  let handleAddToCart = () => {
    console.log("its a function")
  }

  return (
    <div className="container">
      <h1>Marketplace Shopping Cart</h1>
      <hr />
      <div className="row">
        <div className="col-md-8">
        <Products products={filteredProducts} handleAddToCart={handleAddToCart} />
        </div>
        <div className="col-md-4">
        Content 2
        </div>
      </div>
    </div>
  );
}

export default App;
