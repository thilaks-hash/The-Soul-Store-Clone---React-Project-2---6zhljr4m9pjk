import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductInfo_API, projectId } from "../utilities/constants";
import Slider from "./Slider";
const ProductInfo = () => {
  const { productId } = useParams();
  console.log(productId);
  const [productInfo, setProductInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { name, images, fabric, price, description, tags, color, brand } =
    productInfo;
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(ProductInfo_API + productId, {
          headers: {
            projectId: projectId,
          },
        });
        console.log(response.data.data);
        setProductInfo(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    FetchData();
  }, [productId]);

  return (
    <div>
      {error ? (
        <p>{error.message}</p>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="container mx-auto flex flex-wrap p-3">
            {/* Image on the right side */}
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/2 p-10 px-20">
              <Slider slides={images} />
            </div>
            {/* Product details on the left side */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 p-10 border-solid border-2 border-black">
              <h1 className="text-5xl sm:text-3xl md:text-5xl font-serif ">
                {name}
              </h1>
              <h2 className="text-2xl font-semibold p-3">Brand:{brand}</h2>
              <div className="my-4 p-3">
                <span className="text-lg font-bold ">Product Details:</span>{" "}
                {tags.map((tag) => (
                  <div key={tag._id} className="p-2">
                    {tag.label}
                    <div>Type:{tag.type}</div>
                  </div>
                ))}
              </div>
              <div className="p-3">
                Color:
                <span
                  style={{
                    color: color === "WHITE" ? "black" : color,
                  }}
                  className="text-lg font-extrabold"
                >
                  {color}
                </span>
              </div>
              <p className="p-3">${price}</p>
              <div className="flex my-4">
                <button className="bg-red-600 text-white rounded-sm py-2 px-4 mr-4">
                  Add to Cart
                </button>
                <button className="border rounded-sm py-2 px-4">
                  Wishlist
                </button>
              </div>
              <div className="my-4">
                <span className="text-lg font-bold">Product Description: </span>
                {description}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductInfo;
