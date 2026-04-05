import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card friendly">
        <span className="badge">React SPA</span>

        <h1 className="title">Product SPA</h1>

        <p className="subtitle">
          A simple and fast way to explore products.
        </p>

        <p className="description">
          Browse products, search by name, filter by category, and view detailed
          information — all in a smooth single-page experience.
        </p>

        <div className="home-actions">
          <Link to="/products" className="btn primary soft">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
