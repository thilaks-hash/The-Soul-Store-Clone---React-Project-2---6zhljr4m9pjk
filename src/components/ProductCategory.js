import Product from "./Product";
const ProductCategory = ({ products, title }) => {
  return (
    <div>
      <h3 className="font-medium text-4xl text-center p-5 m-5">{title}</h3>
      <div className="flex flex-wrap ">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductCategory;
