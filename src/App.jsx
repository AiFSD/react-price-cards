import './App.css';
import PriceCard from './PriceCard';
import React from 'react';

function App() {
  const priceData = [
    {
      plan: 'FREE',
      price: '0',
      features: [
        '✔  Single User',
        '✔  50GB Storage',
        '✔  Unlimited Public Projects',
        '✔  Community Access',
        '✘  Unlimited Private Projects',
        '✘  Dedicated Phone Support',
        '✘  Free Subdomain',
        '✘  Monthly Status Reports',
      ],
    },
    {
      plan: 'PLUS',
      price: '9',
      features: [
        '✔ 5 Users',
        '✔ 50GB Storage',
        '✔ Unlimited Public Projects',
        '✔ Community Access',
        '✔ Unlimited Private Projects',
        '✔ Dedicated Phone Support',
        '✔ Free Subdomain',
        '✘ Monthly Status Reports',
      ],
    },
    {
      plan: 'PRO',
      price: '49',
      features: [
        '✔ Unlimited Users',
        '✔ 50GB Storage',
        '✔ Unlimited Public Projects',
        '✔ Community Access',
        '✔ Unlimited Private Projects',
        '✔ Dedicated Phone Support',
        '✔ Free Subdomain',
        '✔ Monthly Status Reports',
      ],
    },
  ];

  return (
    <div className="price-cards-container">
      {priceData.map((card, index) => (
        <PriceCard key={index} {...card} />
      ))}
    </div>
  );
}

export default App;