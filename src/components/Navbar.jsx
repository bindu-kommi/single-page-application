import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Product SPA</h2>

      <div>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/products" className="link">Products</NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/profile" className="link">Profile</NavLink>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="link">Login</NavLink>
            <NavLink to="/signup" className="link">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
