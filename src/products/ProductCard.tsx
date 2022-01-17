import React from "react";
interface iProp {
  name: string;
  description: string;
  imageUrl: string;
}
export default function ProductCard({ name, description, imageUrl }: iProp) {
  return (
    <div className="product-card">
      <img src={require("../assets/images/products/" + imageUrl)} alt={name} />

      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="button-link">Read more</button>
      </div>
    </div>
  );
}
