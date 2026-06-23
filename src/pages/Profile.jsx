import { Navigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

const Profile = () => {
  const [orders, setOrders] = useState([]);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
     return <Navigate to="/login" />;
}


  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
  <div className="page profile-page colorful-profile">
    <h2 className="page-title">User Profile</h2>

    {/* USER DETAILS  */}
    <div className="section-header">
      <span className="section-badge">👤</span>
      <h3>User Details</h3>
    </div>

    <div className="profile-card">
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>

    {/*  ORDER HISTORY */ }
    <div className="section-header">
      <span className="section-badge">🛒</span>
      <h3>Order History</h3>
    </div>

    <div className="profile-card">
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <p className="order-title">{order.title}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Total: ₹ {order.total}</p>
            <p className="order-date">{order.date}</p>
          </div>
        ))
      )}
    </div>
  </div>
);


};

export default Profile;
