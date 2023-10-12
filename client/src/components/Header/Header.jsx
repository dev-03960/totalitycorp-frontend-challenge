import "./Header.scss";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
const Header = () => {
    const [scrollstick, setscrollstick] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handleScrollbar =()=>{
        const offset = window.screenY;
        setscrollstick(offset>200?true:false);
    }
    useEffect(()=>{
window.addEventListener("scroll",handleScrollbar);
    },[])
  return (
    <>
     <header
                className={`main-header ${scrollstick ? "sticky-header ":""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li >Home</li>
                        <li >About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" >
                        Dev-Shop
                    </div>
                    <div className="right">
                        <TbSearch    onClick={()=>{setShowSearch(true)}}/>
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                            onClick={()=>{setShowCart(true)}}
                        >
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart = {setShowCart}/>}
            {showSearch&& <Search setShowSearch = {setShowSearch}/>}
    </> 
   
  );
};

export default Header;
