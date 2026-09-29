import ReactUseWebSocket from 'react-use-websocket';
import { useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';

const useWebSocket = ReactUseWebSocket.default;

export function Home({ username }) {
  const WS_URL = 'ws://localhost:8000';
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    queryParams: { username },
  });

  const THROTTLE = 50;
  const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE));

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      sendJsonMessageThrottled.current({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  return <h1>Home, {username}</h1>;
}
