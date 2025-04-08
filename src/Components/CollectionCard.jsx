import React from "react";

export const CollectionCard = ({ number, title, value }) => (
  <div className="collection-card">
    <div className="card-header">
      <h2>#{number}</h2>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="value">{value}</p>
      </div>
    </div>
  </div>
);
