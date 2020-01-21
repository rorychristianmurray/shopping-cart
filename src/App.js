import React from 'react';
import './App.css';
import Products from  "./components/Products"
import Filter from  "./components/Filter"
import axios from "axios"

function App() {

  const [products, setProducts] = React.useState([])
  const [filteredProducts, setFilteredProducts] = React.useState([])
  const [size, setSize] = React.useState()
  const [sort, setSort] = React.useState("")
  // console.log("products : ", products)
  // console.log("filteredProducts : ", filteredProducts)
  console.log("filteredProducts.length : ", filteredProducts.length )

  let handleAddToCart = () => {
    console.log("in handleAddToCart")
  }

  let handleChangeSort = e => {
    console.log("in change sort")
    console.log("e : ", e)
    console.log("e.target.value : ", e.target.value)
    console.log("sort before : ", sort)
    setSort(e.target.value)
    console.log("sort after : ", sort)
    listProducts()
  }

  let handleChangeSize = e => {
    console.log("in change size")
    console.log("e.target.value : ", e.target.value)
    setSize(e.target.value)
    listProducts(e.target.value)
  }

  let listProducts = val => {
    console.log("sort in listProducts : ", sort)
    if (val !== '') {
      console.log("in filtered sort")
      setFilteredProducts(products.sort((a, b)=>(sort === 'lowest' ? (a.price < b.price ? 1 : -1 ) : (a.price > b.price ? 1 : -1 ))))
    } if (val === '') {
      console.log("in default")
      console.log(products.sort((a,b) => (a.id < b.id ? 1 : -1)))

      setFilteredProducts(products.sort((a,b) => (a.id < b.id ? 1 : -1)))
    }

    // setProducts(products)
    
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
