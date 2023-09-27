import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductInfo_API, projectId } from "../utilities/constants";
const ProductInfo = () => {
  const { productId } = useParams();
  console.log(productId);
  const [productInfo, setProductInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
        <div>{productInfo.name}</div>
      )}
    </div>
  );
};
export default ProductInfo;
