import React, { useState } from 'react';
import CryptoToggle from '../components/CryptoToggle';
import TimeframeSelector from '../components/TimeframeSelector';
import ChartComponent from '../components/ChartComponent';
import { WebSocketProvider } from '../components/WebSocketProvider';

function HomePage() {
  const [selectedCoin, setSelectedCoin] = useState('ethusdt');
  const [timeframe, setTimeframe] = useState('1m');

  return (
    <WebSocketProvider symbol={selectedCoin} interval={timeframe}>
      <div>
        <CryptoToggle onSelect={setSelectedCoin} />
        <TimeframeSelector onTimeframeChange={setTimeframe} />
        <ChartComponent />
      </div>
    </WebSocketProvider>
  );
}

export default HomePage;
