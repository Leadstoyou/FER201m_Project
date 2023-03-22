import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
     <ul className="nav-menu">
        <li className="nav-item left">
          <h4 className="">Phim hay</h4>
        </li>
        <li className="nav-item left">
          <a href="#" className="nav-link">Trang chủ</a>
        </li>
        <li className="nav-item right">
          <input placeholder='Nhập phim cần tìm'></input>
        </li>
        <li className="nav-item right">
          <button>Tìm</button>
        </li>
        <li className="nav-item right">
          <a href="#" className="nav-link">Đăng nhập</a>
        </li>
        <li className="nav-item right">
          <a href="#" className="nav-link">Đăng ký</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;