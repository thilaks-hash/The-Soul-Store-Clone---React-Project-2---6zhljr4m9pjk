import axios from "axios";
import { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";
const projectId = "6zhljr4m9pjk";
const HeroBanner = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products",
        {
          headers: {
            projectId: projectId,
          },
        }
      )

      .then(function (response) {
        // Handle successful response
        console.log(response.data.data);
        setProducts(response.data.data);
        setLoading(false);
      })
      .then((data) => {
        if (!data.ok) {
          throw new Error("API request failed"); // Customize the error message as needed
        }
        return data.json();
      })
      .catch(function (error) {
        // Handle error
        console.error(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    <div>Loading...</div>;
  }

  const topRated = products.filter(
    (product) => product.sellerTag === "Top Rated"
  );
  const newArrival = products.filter(
    (product) => product.sellerTag === "New Arrival"
  );
  const featured = products.filter(
    (product) => product.sellerTag === "Featured"
  );
  const bestSeller = products.filter(
    (product) => product.sellerTag === "Best Seller"
  );
  return (
    <div>
      <ProductCategory products={topRated} title="TOP RATED" />
      <ProductCategory products={newArrival} title="NEW ARRIVAL" />
      <ProductCategory products={featured} title="FEATURED" />
      <ProductCategory products={bestSeller} title="BEST SELLER" />
    </div>
  );
};
export default HeroBanner;
