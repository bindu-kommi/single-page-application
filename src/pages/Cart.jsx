import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(cart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        Shopping Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>
            Add products to your cart and they
            will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-card"
              >
                <img
                  src={
                    item.image ||
                    item.thumbnail ||
                    item.images?.[0]
                  }
                  alt={item.title}
                  className="cart-image"
                />

                <div className="cart-content">
                  <h3>{item.title}</h3>

                  <p className="cart-price">
                    ₹ {item.price}
                  </p>

                  <p>
                    Quantity:
                    <strong>
                      {" "}
                      {item.quantity}
                    </strong>
                  </p>

                  <p>
                    Subtotal:
                    <strong>
                      ₹{" "}
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </strong>
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Grand Total: ₹{" "}
              {totalPrice.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;