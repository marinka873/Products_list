

import { useState } from 'react';
import { getTestProducts } from './api/api';

import { ProdictsList } from './components/productsList/productsList';
import { SearchButton } from './components/searchButton/searchButton';
import './App.css';

function App() {
  const [values, setValues] = useState()
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

const handleChange = (value) => {
  const trim = value.trim()
  const res = trim.split('\n');

  setValues(res)
}

const searchProducts = async () => {
   try {
   const res = await getTestProducts(values)

    setProducts(res.data)
  } catch (e) {
    setError(true)
    console.log(e);
  }
}

  return (
    <div className="App">
     <h1 className='title'>Товары</h1>

     <SearchButton handleChange={handleChange} 
                  searchProducts={searchProducts}
                  values={values}
                  error={error} />
     <ProdictsList products={products}/>
    </div>
  );
}

export default App;
