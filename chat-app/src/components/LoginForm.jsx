import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const loginHandleSubmit = async (event) => {
    event.preventDefault();

    // login
    const authObject = {
      'Project-ID': `${process.env.REACT_APP_PROJECT_ID}`,
      'User-Name': username,
      'User-Secret': password,
    };
    try {
      // send username and password
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      setIsError(false);

      // save token in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // reload to render user in App.js
      window.location.reload();
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={loginHandleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`input ${isError && 'error-input'}`}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`input ${isError && 'error-input'}`}
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
          {isError && <p id="error-message">Incorrect Username or Password</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
