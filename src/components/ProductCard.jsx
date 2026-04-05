import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
      <Link to={`/products/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
