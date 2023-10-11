import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {
    return (
        <div className="category-main-content">
            <div className="layout ">
                <div className="category-title">
                    Categories
                </div>
                <div className="products-container">
                <Products/>
                </div>
                
            </div>
        </div>
    )
};

export default Category;
