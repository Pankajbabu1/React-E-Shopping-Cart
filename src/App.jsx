
// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDetails from './Component/ProductDetails';
import SearchItem from './Component/SearchItem';
import Cart from './Component/Cart';
import Page404 from './Component/Page404';
import { item } from './Component/Data';

function App()
{
  // ===reUseComponent ====== 
  const [data, setData] = useState([...item])
  const [cart,setCart]= useState([]);

  return (
    <div className="App">
     {/* <h2> E-Cart [ NYCE COLLECTION ] </h2> */}
     {/* <Product/> */}
     <Router>
     <Navbar cart={cart} setData={setData}/>  
       <Routes>
          <Route path='/' element={<Product cart={cart} setCart={setCart} item={data} />} ></Route>
          <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart}/>} ></Route>
          <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart}/>} ></Route>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} ></Route>
          <Route path='/*' element={<Page404/>} ></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
