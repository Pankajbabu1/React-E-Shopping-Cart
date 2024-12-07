import React from 'react'
// import { item } from './Data'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({item,cart,setCart})
{
    const addToCart=(id,price,title,description,imgsrc)=>{
     const obj={
        id,price,title,description,imgsrc
     }
     setCart([...cart, obj]);
     console.log("cart Element=",cart)
     toast.success('Item Add SucessFully', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
        });
    }

    return (
        <>
        {/* react tostify */}
        <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition: Bounce,
        />
        <div className="container  my-5 ">
          <div className="row">
           {
          item.map((Product) => {
          return (
          <>
          <div key={Product.id} className="col-lg-4 col-md-6 my-3 text-center ">
          <div className="card" style={{ width:'18rem'}}>

          <Link to={`/product/${Product.id}`} style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
          <img src={Product.imgsrc} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
          <h5 className="card-title">{Product.title}</h5>
          <p className="card-text">{Product.description}</p>   
          <button className='btn btn-primary mx-3'>{Product.price} ₹</button>
           
          <button onClick={()=>addToCart(Product.id,Product.price,Product.title,Product.description,Product.imgsrc)} className='btn btn-warning'>Add to Cart</button> 
           </div>
          </div>
         </div>
         </>
         )
        })
        }
        </div>
    </div>
 </>
 )
}

export default Product
