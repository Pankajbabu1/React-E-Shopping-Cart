import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { item } from './Data';
import Product from './Product';

const SearchItem = (cart,setCart) => 
  {
  const {term}=useParams();
  const [filterData, setFilterData] = useState([]);

  
  useEffect (()=>{
    const filterData=()=>{
      const data=item.filter((pro)=>pro.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
      // console.log(data)
      setFilterData(data)
    }
    filterData();
  },[term])

  return (
    <div>
      {/* <h3> Search items {term} </h3> */}
      <Product cart={cart} setCart={setCart} item={filterData}></Product>  
    </div>
  )
}

export default SearchItem
