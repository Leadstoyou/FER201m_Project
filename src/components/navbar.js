import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = () => {
    const encodedSearchItem = encodeURIComponent(searchItem.trim());
    if (encodedSearchItem) {
      window.location.href = `/home?search=${encodedSearchItem}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-menu">
<<<<<<< HEAD
        <div className="nav-item left">
          <a className="title">Phim hay</a>
          <a href="./home" className="nav-link">
            Trang chủ
          </a>
        </div>

        <div className="nav-item right">
          <input
            placeholder="Nhập phim cần tìm"
            onChange={(e) => setSearchItem(e.target.value)}
          ></input>
          <button onClick={() => handleSearch()}>Tìm</button>
          <a href="./" className="nav-link">
            Đăng nhập
          </a>
          <a href="./register" className="nav-link">
            Đăng ký
          </a>
=======
        <div className="nav-item left">          
          <a className='title' >Phim hay</a>

          <a href="./home" className="nav-link">Trang chủ</a>         

        </div>

        <div className="nav-item right">
          <input placeholder='Nhập phim cần tìm'></input>
          <button>Tìm</button>

          <a href="./" className="nav-link">Đăng nhập</a>
          <a href="./register" className="nav-link">Đăng ký</a>

>>>>>>> 129bab94a20df5dfc0210b43d8dff7aa25f464eb
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
