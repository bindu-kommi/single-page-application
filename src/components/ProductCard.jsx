// import React from "react";

// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="card">
//       <img src={product.image} alt={product.title} />
//       <h4>{product.title}</h4>
//       <p>₹ {product.price}</p>
//       <Link to={`/products/${product.id}`} className="btn">
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      localStorage.setItem(
        "redirectAfterLogin",
        `/products/`
      );

      navigate("/login");
      return;
    }

    navigate(`/products/${product.id}`);
  };

  const addToWishlist = () => {
  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.find(
    (item) => item.id === product.id
  );

  if (exists) {
    alert("Already in wishlist");
    return;
  }

  wishlist.push(product);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );

  window.dispatchEvent(
  new Event("wishlistUpdated")
);

  alert("Added to wishlist");
};

const addToCart = () => {
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

  alert("Added to cart");
};

  return (
    
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h4>{product.title}</h4>

      <p>₹ {product.price}</p>

     <div className="action-buttons">
      <button className="wishlist-btn" onClick={addToWishlist}>
         ❤️ Wishlist
      </button>

      <button className="cart-btn" onClick={addToCart}>
       🛒 Add To Cart
     </button>
</div>

<button className="details-btn" onClick={handleViewDetails}>
  View Details
</button>
      

    </div>
  );
};

export default ProductCard;