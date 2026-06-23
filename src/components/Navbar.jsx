import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  // }, []);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    // setIsLoggedIn(false);
    navigate("/");
  };

  const [cartCount, setCartCount] =
  useState(0);

useEffect(() => {
  const updateCount = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) ||
      [];

    const total = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    setCartCount(total);
  };

  updateCount();


  window.addEventListener(
    "cartUpdated",
    updateCount
  );

  const updateWishlist = () => {
  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  setWishlistCount(wishlist.length);
};

  window.addEventListener(
  "wishlistUpdated",
  updateWishlist
);

  return () =>
    window.removeEventListener(
      "storage",
      updateCount
    );
}, []);

const [wishlistCount, setWishlistCount] =
  useState(0);

// useEffect(() => {
//   const wishlist =
//     JSON.parse(
//       localStorage.getItem("wishlist")
//     ) || [];

//   setWishlistCount(wishlist.length);
// }, []);

useEffect(() => {
  const updateWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlistCount(wishlist.length);
  };

  updateWishlist();

  window.addEventListener(
    "wishlistUpdated",
    updateWishlist
  );

  return () =>
    window.removeEventListener(
      "wishlistUpdated",
      updateWishlist
    );
}, []);


  return (
    <nav className="navbar">
      <h2>Product SPA</h2>

      <div>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/products" className="link">Products</NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/profile" className="link">Profile</NavLink>
           <NavLink to="/wishlist" className="icon-link">❤️ Wishlist<span className="nav-count"> {wishlistCount}</span>
           </NavLink>

          <NavLink to="/cart" className="icon-link"> 🛒 Cart<span className="nav-count">{cartCount}</span>
           </NavLink>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="link">Login</NavLink>
            <NavLink to="/signup" className="link">Signup</NavLink>
            {/* <NavLink to="/cart"> Cart ({cartCount})</NavLink>
            <NavLink to="/wishlist">Wishlist ({wishlistCount})</NavLink> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
