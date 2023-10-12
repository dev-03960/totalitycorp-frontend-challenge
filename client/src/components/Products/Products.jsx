import "./Products.scss";
import Product from "./Product/Product";
const Products = ({headingTexts}) => {
    return <div className="products-container">
        <div className="sec-heading">
{headingTexts}
        </div>
        <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>;
};

export default Products;
