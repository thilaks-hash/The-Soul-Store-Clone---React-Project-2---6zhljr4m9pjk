import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductInfo_API, projectId } from "../utilities/constants";
import Slider from "./Slider";
import { useSelector } from "react-redux";
import OrderNow from "./OrderNow";
const ProductInfo = () => {
  const { productId } = useParams();
  console.log(productId);
  const [productInfo, setProductInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userToken = useSelector((state) => state.auth.user);

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
  // ------------------wishlist---------------------

  const handleWishList = async (productId, userToken) => {
    const url = "https://academics.newtonschool.co/api/v1/ecommerce/wishlist/";
    const headers = {
      Authorization: `Bearer ${userToken}`,
      projectId: projectId,
    };

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: { productId: productId },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Product added to favorites:", data);
      })
      .catch((error) => {
        console.error("Error adding product to favorites:", error);
      });
  };

  const handleCart = async (productId, userToken) => {
    const data = await axios.post(
      `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`,

      {
        headers: {
          projectId: projectId,
          Authorization: `Bearer ${userToken}`,

          "Content-Type": "application/json",
        },
      }
    );

    const json = await data.json();
    console.log(json.data);
  };

  return (
    <div>
      {error ? (
        <p>{error.message}</p>
      ) : loading ? (
        <div className="pt-20 text-center text-lg">
          Loading...
          <div className="flex justify-center h-80 text-red-600">
            <img
              src="https://usagif.com/wp-content/uploads/loading-78.gif"
              alt="loading gif"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="container mx-auto flex flex-wrap p-3">
            {/* Image on the right side */}
            <div className="w-full sm:w-1/2   px-20 pl-6 lg:p-20 sm:px-10">
              <Slider slides={images} />
            </div>
            {/* Product details on the left side */}
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/2 p-10">
              <h1 className="text-4xl sm:text-3xl md:text-3xl font-serif p-2">
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
              <div className="p-3 font-bold">
                COLOR:
                <span
                  style={{
                    color: color === "WHITE" ? "black" : color,
                  }}
                  className="text-lg font-extrabold"
                >
                  {color}
                </span>
              </div>
              <p className="p-3 font-extrabold">${price}</p>
              <div className="flex my-4">
                <button
                  className="bg-red-600 text-white rounded-sm py-2 px-4 mr-4"
                  onClick={() => handleCart(productId, userToken)}
                >
                  Add to Cart
                </button>
                <button
                  className="border rounded-sm py-2 px-4 border-zinc-500"
                  onClick={() => handleWishList(productId, userToken)}
                >
                  Wishlist
                </button>
                <button className="bg-red-600 text-white rounded-sm py-2 px-4 mr-2 ml-4">
                  <Link to={`/buynow/${productId}`}>Buy Now</Link>
                </button>
              </div>
              <div className="my-4">
                <span className="text-lg font-bold">Product Description: </span>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductInfo;
