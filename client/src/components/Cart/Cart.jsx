import "./Cart.scss";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
const Cart = ({setShowCart}) => {
    const {subTotal,cartItem } = useContext(Context);
   const navigate = useNavigate();
    return (<div className="cart-panel">
        <div className="opac-layer" onClick={() => setShowCart(false)}></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn"
                onClick={()=>{setShowCart(false)}}>
                    <MdClose className="close-btn"/>
                    <span className="text">close</span>
                </span>
            </div>
            {!cartItem.length && <div className="empty-cart">
                <BsCartX/>
                <span>No Product in Cart</span>
                <button className="return-cta" onClick={()=>{
            setShowCart(false)}}>Return To shop</button>
            </div>}
            <>
            <CartItem/>
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">&#8377;{subTotal}</span>
                </div>
                <div className="button">
                    <button className="checkout-cta" onClick={()=>{navigate("/login"); setShowCart(false)}}>Checkout</button>
                </div>
            </div>
            </>
        </div>
    </div>);
};

export default Cart;
