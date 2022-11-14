import React from 'react';
import { useState } from 'react';

const Login = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  const [data, setData] = useState({ userName: '', password: '' });

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          Username: {''}
          <input
            type="text"
            name="username"
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          ></input>
        </label>
        <label>
          Password: {''}
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          ></input>
        </label>
        <button type="sumbit">Login in</button>
      </form>
    </div>
  );
};

export default Login;
