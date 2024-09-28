import React from 'react';
import useWebSocket from './hooks/useWebSocket'; // Adjust path as necessary
import ChartComponent from './components/ChartComponent'; // Adjust path as necessary

const App = () => {
  const { data: candleData } = useWebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1m');

  return (
    <div>
      <h1>Binance Market Data App</h1>
      <ChartComponent candleData={candleData} />
    </div>
  );
};

export default App;