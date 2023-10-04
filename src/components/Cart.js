// Cart.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { projectId } from "../utilities/constants";
import { useSelector } from "react-redux";

function Cart() {
  const [cartItems, setCartItems] = useState({ items: [] });
  const userToken = useSelector((state) => state.auth.user);

  useEffect(() => {
    const apiUrl = "https://academics.newtonschool.co/api/v1/ecommerce/cart";

    async function fetchCartItems() {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            projectID: projectId,
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(response.data.data);
        setCartItems(response.data.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }

    fetchCartItems();
  }, []);

  return (
    <div>
      <h1 className="p-5 text-center text-5xl">Shopping Cart</h1>
      <div>
        {cartItems.items.length === 0 ? (
          <>
            <p className="pt-20 text-center text-lg">Your cart is empty.</p>
            <div className="flex justify-center h-80 ">
              <img
                src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif"
                alt="UFO"
              />
            </div>
          </>
        ) : (
          <div>
            <h2>Cart Items:</h2>
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
}

export default Cart;
