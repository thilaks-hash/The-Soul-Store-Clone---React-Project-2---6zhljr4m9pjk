const Product = ({ product }) => {
  return (
    <div>
      <img
        className="h-80 w-80 m-5"
        src={product.displayImage}
        alt={product.name}
      />
    </div>
  );
};
export default Product;
