import { useEffect, useState } from 'react';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const connect = () => {
    const newSocket = new WebSocket(url);

    newSocket.onopen = () => {
      console.log('WebSocket connection opened');
      setIsConnected(true);
    };

    newSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('WebSocket Message:', message);

      if (message.e === 'kline') {
        setData((prevData) => [
          ...prevData,
          {
            time: message.k.t, // Assuming your message has these properties
            price: message.k.c, // Closing price
          },
        ]);
      }
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    newSocket.onclose = (event) => {
      console.log('WebSocket closed:', event);
      setIsConnected(false);
      if (!event.wasClean) {
        console.log('Reconnecting...');
        setTimeout(connect, 1000); // Reconnect after 1 second
      }
    };

    setSocket(newSocket);
  };

  useEffect(() => {
    connect();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  return { data, isConnected };
};

export default useWebSocket;
