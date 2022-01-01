import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  transports: ['websocket', 'polling'],
});
export default function Performance() {
  const [cpu, setCpu] = useState(0);
  useEffect(() => {
    socket.on('cpu', ({ value }) => {
      console.log(value);
      setCpu(value);
    });
    return () => socket.disconnect();
  }, []);
  const mb = '20px';
  return (
    <>
      <div className='container'>
        <div style={{ color: 'gold', fontWeight: 'bold', marginBottom: mb }}>
          CPU
        </div>
        <div style={{ fontSize: '2rem' }}>{cpu * 100}</div>
      </div>
    </>
  );
}
