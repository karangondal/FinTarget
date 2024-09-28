import React, { createContext } from 'react';
import useWebSocket from '../hooks/useWebSocket';  // Import the custom hook

// Create WebSocket Context to share data globally
export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ symbol, interval, children }) => {
  // Get candlestick data using the custom useWebSocket hook
  const candleData = useWebSocket(symbol, interval);

  return (
    <WebSocketContext.Provider value={candleData}>
      {children}  {/* Render children components that consume WebSocket data */}
    </WebSocketContext.Provider>
  );
};
