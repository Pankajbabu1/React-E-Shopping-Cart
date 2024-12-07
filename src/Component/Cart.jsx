import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  return (
    <>
      <div className="containerCart my-5" style={{display:'flex', flexWrap:'wrap', justifyContent:'center',gap:'50px'}}>
        {
          // ======= if condition (if youy cart is empty)====
          cart.length == 0 ? (
          <>
          <h3> Your Card is Empty </h3>
          <Link to='/'  className='btn btn-warning'> Continue Shopping... </Link>
          </>
         ):
         cart.map((product)=>{
           return(
            <div className="card mb-3" style={{width:'700px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.imgsrc} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className='btn btn-primary mx-3'>{product.price} ₹</button>
                  <button className='btn btn-warning'>Buy Now </button> 
          
                 </div>
              </div>
            </div>
          </div>
           )
          })
        }
      
      </div>
      {
        cart.length!=0 && (
          <div className='container-cart' style={{display:'flex', justifyContent:'center', gap:'30px'}}>
        <button className='btn btn-warning'>CheckOut</button>
        <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
      </div>
        )
      }
      

    </>
  )
}

export default Cart
