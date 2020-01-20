import React from 'react';
import './App.css';
import Products from  "./components/Products"
import Filter from  "./components/Filter"
import axios from "axios"

function App() {

  const [products, setProducts] = React.useState([])
  const [filteredProducts, setFilteredProducts] = React.useState([])
  const [size, setSize] = React.useState()
  const [sort, setSort] = React.useState()
  // console.log("products : ", products)
  // console.log("filteredProducts : ", filteredProducts)
  console.log("filteredProducts.length : ", filteredProducts.length )

  let handleAddToCart = () => {
    console.log("in handleAddToCart")
  }

  let handleChangeSize = () => {
    console.log("in change size")
  }

  let handleChangeSort = () => {
    console.log("in change sort")
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
          <Filter size={size} sort={sort} handleChangeSize={handleChangeSize} handleChangeSort={handleChangeSort} count={filteredProducts.length} />
          <hr/>
        <Products products={filteredProducts} handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
