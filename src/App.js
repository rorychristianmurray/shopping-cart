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

  let handleAddToCart = () => {
    console.log("in handleAddToCart")
  }

  let handleChangeSort = e => {
    console.log("in handleChangeSort")
    console.log("e.target.value : ", e.target.value)
    setSort(e.target.value)
    // listProducts(e.target.value)
  }


  let handleChangeSize = e => {
    console.log("in change size")
    console.log("e.target.value : ", e.target.value)
    setSize(e.target.value)
    let val = e.target.value
    // listProducts(e.target.value)
  }
  
  React.useEffect(() => {
        listProducts()
  }, [sort, size, filteredProducts])



  let listProducts = () => {
    console.log("sort in listProducts : ", sort)
    console.log("size in listProducts : ", size)
    if (sort !== '') {
      console.log("in filtered sort")
      setProducts(products.sort((a, b)=>(sort === 'lowest' ? (a.price < b.price ? 1 : -1 ) : (a.price > b.price ? 1 : -1 ))))
    } if (sort === '') {
      console.log("in default")
      console.log(products.sort((a,b) => (a.id < b.id ? 1 : -1)))

      setProducts(products.sort((a,b) => (a.id > b.id ? 1 : -1)))
    }

    if (size !== "all") {
      let filtSizeProd = products.filter(a => a.availableSizes.indexOf(state.size))
      console.log("something")
    }

    
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
