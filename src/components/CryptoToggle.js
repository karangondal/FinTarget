import React from 'react';

const CryptoToggle = ({ onSelect }) => {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <select onChange={handleSelect}>
      <option value="ethusdt">ETH/USDT</option>
      <option value="bnbusdt">BNB/USDT</option>
      <option value="dotusdt">DOT/USDT</option>
    </select>
  );
};

export default CryptoToggle;
