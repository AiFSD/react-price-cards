import React from 'react';


function PriceCard({ plan, price, features }) {
  return (
    <div className="price-card">
      <div className="card-header">
        <span className="plan">{plan}</span>
        <span className="price">
          ${price}/month
        </span>
      </div>
      <ul className="card-features">
  {features.map((feature, index) => (
    <li key={index}>
      {feature}
    </li>
  ))}
        
</ul>
      <button className="button">BUTTON</button>
    </div>
  );
}

export default PriceCard;