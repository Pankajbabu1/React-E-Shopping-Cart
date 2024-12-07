import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { item } from './Data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = ({cart,setCart}) => 
  {
  const {id}=useParams();
  const[product,setProduct]=useState({})
  const [relatedProducts, setRelatedProducts] = useState([])
   
  useEffect(() => {
    const filterProduct=item.filter((product)=>product.id == id);
    // console.log(filterProduct)
    setProduct(filterProduct[0]) ;

    const relatedProducts=item.filter((p)=>p.category === product.category)
    console.log(" ReletedProduct := ",relatedProducts)
   setRelatedProducts(relatedProducts)
  },[id,product.category])

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
      {/* <h3>ProductDetails {id}</h3> */}
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
     <div className='container'>
       <div className='img'>
        <img src={product.imgsrc} alt="" />
       </div>
      <div  className='container-det'>
         <h2 className="card-title">{product.title}</h2>
          <h6 className="card-text">{product.description}</h6>   
          <button className='btn btn-primary mx-3'>{product.price} ₹</button> 
          {/* <button className='btn btn-warning'>Add to Cart</button> */}
          <button onClick={()=>addToCart(Product.id,Product.price,Product.title,Product.description,Product.imgsrc)} className='btn btn-warning'>Add to Cart</button> 
      </div>
     </div>
     <h3> Related Products </h3>
     <Product cart={cart} setCart={setCart} item={relatedProducts} />
    </>
  )
}

export default ProductDetails