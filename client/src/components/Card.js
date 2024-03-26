import React from "react";
import "./Card.css";
const Card = ({title,desc}) => {
  return (
    <div className="card-section">
      <div className="card-title">{title}</div>
      <div className="card-desc">{desc}</div>
    </div>
  );
};

export default Card;
