import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ headingTexts,innerPage, products }) => {
    console.log(products);
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingTexts}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
    </div>
  );
};

export default Products;
