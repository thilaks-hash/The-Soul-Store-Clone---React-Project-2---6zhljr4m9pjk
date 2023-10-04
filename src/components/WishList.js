import React, { useEffect, useState } from "react";
import axios from "axios";
import { projectId } from "../utilities/constants";
import { useSelector } from "react-redux";

const WishList = () => {
  const [wishList, setWishList] = useState({ items: [] });
  const userToken = useSelector((state) => state.auth.user);

  useEffect(() => {
    const apiUrl =
      "https://academics.newtonschool.co/api/v1/ecommerce/wishlist";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            projectID: projectId,
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(response.data.data);
        setWishList(response.data.data);
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="p-5 text-center text-5xl">WISH LIST</h1>
      <div>
        {wishList.items.length === 0 ? (
          <>
            <p className="pt-20 text-center text-lg">Your WISHLIST is empty.</p>
            <div className="flex justify-center h-80 ">
              <img
                src="https://media2.giphy.com/media/hpdxVSq32dhQUdmiJC/giphy.gif?cid=6c09b952dqfzk92rd30tzco4w17ugwt02lw97dt0qeub5eh0&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                alt="wishlist gif"
              />
            </div>
          </>
        ) : (
          <div>
            <h2>WishList Items:</h2>
            <ul>
              {/* {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name}: ${item.price}
                </li>
              ))} */}
              hi
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
