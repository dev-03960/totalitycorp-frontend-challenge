import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
	
import { ToastContainer, toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";
const SingleProduct = () => {
    const [quantity,setQuantity] = useState(1);
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const {handleAddToCart} = useContext(Context);
   
    const decrement = () =>{
        setQuantity((prevstate)=>{
            if(prevstate === 1)
            {
                return 1;
            }
return prevstate - 1
        })
    }
    const increment = () =>{
        setQuantity((prevstate)=>{
            
return prevstate + 1
        })
    }

    if (!data) return;
    const product = data?.data?.[0]?.attributes;

    const showToast = () => {
        toast.success('Your item added successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

      
    };
    return (
        <>
         <div className="single-product-main-content">
            <div className="layout">
            <div className="single-product-page">
                <div className="left">
<img src=  {process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                product?.img?.data?.attributes?.url }alt="" />
                </div>
                <div className="right">
<span className="name">{product.title}</span>
<span className="price">{product.Price}</span>
<span className="desc">{product.desc}
</span>

<div className="cart-buttons">
    <div className="quantity-buttons">
        <span onClick={decrement}>-</span>
        <span>{quantity}</span>
        <span onClick={increment}>+</span>
    </div>
    <button className="add-to-cart-button" onClick={()=>{handleAddToCart(data?.data?.[0],quantity)
    setQuantity(1);
   showToast();
    }}>
    <FaCartPlus size = {20}/>
    ADD TO CART
</button>
</div>

<span className="divider" />
<div className="info-item">
    <span className="text-bold">Category: 
    <span> { product.categories.data[0].attributes.title}</span>
    </span>
    <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
</div>

                </div>
                </div>
                <RelatedProducts 
                productId = {id}
                categoryId = {product?.categories?.data?.[0]?.id}/>
            </div>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        /></>
       
    );
};

export default SingleProduct;
