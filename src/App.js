// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [userAgent, setUsername] = useState(''); // change variable name to 'userAgent'
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
        const response = await fetch('http://localhost:8081/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userAgent, password }), // change property name to 'userAgent'
        });

        const result = await response.json();

        if (response.ok) {
            // Authentication successful
            setMessage(`Welcome, ${userAgent}!`);
        } else {
            setMessage(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error during login:', error);
        setMessage('An error occurred during login');
    }
};

  return (
    <div>
      <div>
        <label>Username:</label>
        <input type="text" value={userAgent} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div>{message}</div>
    </div>
  );
}

export default App;
