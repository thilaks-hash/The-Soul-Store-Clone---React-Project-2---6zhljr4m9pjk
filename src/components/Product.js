import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { displayImage, _id, name } = product;
  console.log(product);
  return (
    <div className="relative group">
      <img
        className="h-80 w-80 m-5 hover:cursor-pointer "
        src={displayImage}
        alt={name}
      />

      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white py-2 px-4 opacity-0 transform transition-transform duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-lg">${product.price}</p>
      </div>
    </div>
  );
};
export default Product;
