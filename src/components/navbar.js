import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <div className="nav-item left">          
          <a className='title' >Phim hay</a>

          <a href="./home" className="nav-link">Trang chủ</a>         

        </div>

        <div className="nav-item right">
          <input placeholder='Nhập phim cần tìm'></input>
          <button>Tìm</button>

          <a href="./" className="nav-link">Đăng nhập</a>
          <a href="./register" className="nav-link">Đăng ký</a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;