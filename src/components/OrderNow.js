import { useState } from "react";

const OrderNow = ({ productId }) => {
  const [quantity, setQuantity] = useState("1");
  const [address, setAddress] = useState("");

  return (
    <div className="text-center text-lg">
      OrderNow
      <form>
        <label>
          Quantity
          <input type="number" value={quantity} />
        </label>
        <label>
          Address type:
          <input type="text" placeholder="address type" value={address} />
        </label>
      </form>
    </div>
  );
};
export default OrderNow;
