import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// const categories = [
//   "Smartphones",
//   "Laptops",
//   "Beauty",
//   "Furniture",
//   "Groceries",
//   "Sports",
// ];

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Shop Smarter, Live Better</h1>

          <p>
            Discover thousands of products from top categories.
            Find the best deals and enjoy a seamless shopping experience.
          </p>

          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories
      <section className="categories-section">
        <h2>Shop By Category</h2>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </section> */}

      {/* Features */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get products delivered quickly and safely.</p>
          </div>

          <div className="feature-card">
            <h3>💳 Secure Payments</h3>
            <p>Multiple payment options with complete security.</p>
          </div>

          <div className="feature-card">
            <h3>🔄 Easy Returns</h3>
            <p>Hassle-free returns and customer support.</p>
          </div>

          <div className="feature-card">
            <h3>⭐ Top Quality</h3>
            <p>Carefully selected products from trusted brands.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Products</p>
        </div>

        <div className="stat-card">
          <h2>5K+</h2>
          <p>Customers</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Categories</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Satisfaction</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Explore Amazing Products?</h2>

        <p>
          Browse our collection and discover products that match your needs.
        </p>

        <Link to="/products" className="hero-btn">
          Browse Products
        </Link>
      </section>
    </div>
  );
};

export default Home;