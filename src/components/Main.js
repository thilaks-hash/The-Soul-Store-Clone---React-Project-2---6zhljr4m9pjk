import FetchApi from "./FetchApi";
import Product from "./Product";
import { Link } from "react-router-dom";

const Main = () => {
  const { data, loading, error } = FetchApi();
  console.log(data);
  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap">
          {data.map((product, index) => (
            <Link key={product._id} to={"/productinfo/" + product._id}>
              <Product key={index} product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Main;
