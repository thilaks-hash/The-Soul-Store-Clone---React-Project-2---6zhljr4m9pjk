import axios from "axios";
import { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";
import { Product_API } from "../utilities/constants";
import { projectId } from "../utilities/constants";
import FetchApi from "./FetchApi";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  const { data, loading, error } = FetchApi();
  console.log(data);

  const categoryFilters = [
    { tag: "Top Rated", title: "TOP RATED" },
    { tag: "New Arrival", title: "NEW ARRIVAL" },
    { tag: "Featured", title: "FEATURED" },
    { tag: "Best Seller", title: "BEST SELLER" },
  ];

  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {categoryFilters.map((filter, index) => (
            <Link key={index} to={"/main"}>
              <ProductCategory
                key={index}
                products={data.filter(
                  (product) => product.sellerTag === filter.tag
                )}
                title={filter.title}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default HeroBanner;
