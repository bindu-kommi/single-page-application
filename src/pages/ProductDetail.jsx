import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const totalPrice = (product.price * quantity).toFixed(2);
  const handleBuy = () => {
  const order = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: quantity,
    total: totalPrice,
    date: new Date().toLocaleString(),
  };

  const existingOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  localStorage.setItem(
    "orders",
    JSON.stringify([...existingOrders, order])
  );

  alert("Order placed successfully!");
};


  return (
    <div className="page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="detail-desc">{product.description}</p>

          <h3 className="price">₹ {product.price}</h3>

          {/* Quantity Section */}
          <div className="quantity-box">
            <span>Quantity:</span>
            <div className="quantity-controls">
              <button onClick={decreaseQty}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>
          </div>

          {/* Total Price */}
          <div className="total-price">
            Total: <strong>₹ {totalPrice}</strong>
          </div>

          {/* Buy Button */}
         <button
           className="buy-btn"
           onClick={handleBuy}
        >
        Buy Now
        </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
