import React, { useEffect, useState } from "react";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(storedWishlist);
  }, []);

  const removeWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };

  const moveToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert("Added to Cart");
  };

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <h2>Your Wishlist is Empty</h2>
          <p>
            Add products to your wishlist and they
            will appear here.
          </p>
        </div>
      ) : (
        <div className="wishlist-container">
          {wishlist.map((item) => (
            <div
              className="wishlist-card"
              key={item.id}
            >
              <img
                src={
                  item.image ||
                  item.thumbnail ||
                  item.images?.[0]
                }
                alt={item.title}
                className="wishlist-image"
              />

              <div className="wishlist-content">
                <h3>{item.title}</h3>

                <p className="wishlist-price">
                  ₹ {item.price}
                </p>

                <div className="wishlist-actions">
                  <button
                    className="cart-btn"
                    onClick={() =>
                      moveToCart(item)
                    }
                  >
                    Add To Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeWishlist(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;