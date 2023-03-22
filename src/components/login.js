import React, { useState, useEffect } from 'react';
import './login.css';
import Navbar from '../components/navbar'
import Footer from '../components/footer'


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Your login logic here
  }, [isSubmitting]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div>
          <button>Đăng nhập bằng Facebook</button>
          <button>Đăng nhập bằng Google</button>
        </div>
        <p>Hoặc</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='Email address*' required id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password*' required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <button type="submit" className="login-button" disabled={isSubmitting}>Đăng nhập</button>
            <button type="submit" className="login-button" disabled={isSubmitting}>Quên mật khẩu</button>
          </div>
          <hr></hr>
          <div>
            Bạn chưa có tài khoản?
            <a href="">Đăng ký</a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


