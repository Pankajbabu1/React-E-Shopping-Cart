import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { item } from './Data'
import Cart from './Cart';
import { FaCartArrowDown } from 'react-icons/fa';

function Navbar({setData,cart})
{
  const navigate=useNavigate();
  // useNavigate() is a hook that is used for realocate the page. 
  // === Search Term ==================
  const[searchTerm,setSearchTerm]=useState('')

  
  const handleSubmit = (e)=>{
   e.preventDefault();
   navigate(`/search/${searchTerm}`)
   setSearchTerm("");
  }
  // ===== filter by category function =======
  const filterByCategory=(category)=>{
    const element=item.filter((product)=>product.category === category);
    setData(element);
    // console.log(element);
  }
  // ===== filter by price function ==========
  const filterByPrice=(price)=>{
  const elem=item.filter((product)=>product.price >= price)
  setData(elem)
  }


  return (
    <>
    <header className='sticky-top'>
      <div className='nav-bar'>
       <Link  to='/' className='brand'>NYCE COLLECTION </Link>
       {/* <Link to='/'>NYCE COLLECTION</Link> */}

       <form onSubmit={handleSubmit} className='search-bar'>
        <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type='text' placeholder='Search Product'></input>
       </form> 

       <Link to='/cart' className='cart'>
       <button type="button" className="btn btn-primary position-relative" >
       <FaCartArrowDown style={{fontSize:'1.5rem'}}/>

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
       {/* <i className="fa-regular fa-cart-shopping"></i>Cart</Link> */}
       <i className="fa-regular fa-cart-shopping"></i></Link>
              
      </div>

      <div className='nav-bar-wraper'>
         <div className='filter'>Filter by {'->'}</div>
         <div onClick={()=>setData(item)} className='items'>No Filter</div>
         <div onClick={()=>filterByCategory('mobile')} className='items'>Mobile</div>
         <div onClick={()=>filterByCategory('laptop')} className='items'>Laptop</div>
         <div onClick={()=>filterByCategory('tablets')} className='items'>Tablets</div>
         <div onClick={()=>filterByPrice(5000)} className='items'>{'>='}5000</div>
         <div onClick={()=>filterByPrice(10000)} className='items'>{'>='}10000</div>
         <div onClick={()=>filterByPrice(20000)} className='items'>{'>='}20000</div>
         <div onClick={()=>filterByPrice(30000)} className='items'>{'>='}30000</div>
      </div>
    </header>
    </>
  )
}

export default Navbar
