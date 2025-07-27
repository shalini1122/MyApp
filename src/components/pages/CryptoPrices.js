import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const CryptoPrices = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5")
      .then(response => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching coins:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading Crypto Prices...</p>;

  return (
    <section className="crypto-section">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Top 5 Cryptocurrencies</h2>
      <div className="crypto-list">
        {coins.map((coin) => (
          <div key={coin.id} className="crypto-card">
            <img src={coin.image} alt={coin.name} width={30} height={30} />
            <h4>{coin.name}</h4>
             <p>Price: ${coin.current_price}</p>
            <p>Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CryptoPrices;
