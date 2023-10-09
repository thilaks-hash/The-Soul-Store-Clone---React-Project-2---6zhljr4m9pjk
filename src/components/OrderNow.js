import React, { useState } from "react";
import axios from "axios";
import { projectId } from "../utilities/constants";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BuyNowButton = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addressInfo, setAddressInfo] = useState({
    addressType: "HOME",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    country: "USA",
    zipCode: "12345",
  });
  const [ordered, setOrdered] = useState(false);
  const [message, setMessage] = useState("");
  const userToken = useSelector((state) => state.auth.user);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo({ ...addressInfo, [name]: value });
  };
  const handleBuyNow = () => {
    const requestBody = {
      productId: productId,
      quantity: quantity,
      addressType: addressInfo.addressType,
      address: {
        street: addressInfo.street,
        city: addressInfo.city,
        state: addressInfo.state,
        country: addressInfo.country,
        zipCode: addressInfo.zipCode,
      },
    };
    console.log("Request Body:", requestBody);

    axios
      .post(
        "https://academics.newtonschool.co/api/v1/ecommerce/order",
        requestBody,
        {
          headers: {
            projectID: projectId,
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => {
        setOrdered(true);
        console.log("Item added to the order:", response.data);
        setMessage(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error adding item to order:", error);
        // Handle error
      });
  };

  return (
    <div>
      {ordered ? (
        <>
          <h1 className="text-2xl font-bold text-green-600 p-10 text-center">
            {message.message}
          </h1>

          <div className="flex justify-center h-30 ">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6209fc508f791e729abec7d0/18641903-a848-4a3a-a0a3-c9e2ddaa15c4/02-lottie-tick-01-instant-2.gif"
              alt="ordergif"
              className="h-30"
            />
          </div>
          <h1 className="text-2xl font-bold text-black p-2 text-center">
            Order Id: <span className="text-red-600">{message.data._id}</span>
          </h1>
          <h3 className="text-2xl font-bold text-black p-2 text-center">
            Total price: ₹{message.data.totalPrice}
          </h3>
        </>
      ) : (
        <div className="bg-gray-200 p-4 rounded-lg">
          <label className="block mb-2">
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block mb-2">
            Address Type:
            <input
              type="text"
              name="addressType"
              value={addressInfo.addressType}
              onChange={handleAddressChange}
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block mb-2">
            Street:
            <input
              type="text"
              name="street"
              value={addressInfo.street}
              onChange={handleAddressChange}
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block mb-2">
            City:
            <input
              type="text"
              name="city"
              value={addressInfo.city}
              onChange={handleAddressChange}
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block mb-2">
            State:
            <input
              type="text"
              name="state"
              value={addressInfo.state}
              onChange={handleAddressChange}
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block mb-2">
            Country:
            <input
              type="text"
              name="country"
              value={addressInfo.country}
              onChange={handleAddressChange}
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block mb-2">
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={addressInfo.zipCode}
              onChange={handleAddressChange}
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </label>
          <button
            onClick={handleBuyNow}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-400 focus:outline-none"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyNowButton;
