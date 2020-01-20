import React from 'react';
import './App.css';
import Products from  "./components/Products"
import axios from "axios"

function App() {

  const [products, setProducts] = React.useState([])
  const [filteredProducts, setFilteredProducts] = React.useState([])
  console.log("products : ", products)
  console.log("filteredProducts : ", filteredProducts)

  let handleAddToCart = () => {
    console.log("its a function")
  }

  React.useEffect(() => {
    axios.get("http://localhost:8000/products")
    .then(res => {
      console.log("res : ", res)
      setProducts(res.data)
      setFilteredProducts(res.data)
      return res.data
    })
    .catch(err => {
      console.log("err : ", err)
      return err
    })
  }, [])

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
