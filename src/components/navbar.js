import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./navbar.css";

function Navbar() {
  const [searchItem, setSearchItem] = useState("");
  const loginedUser = JSON.parse(localStorage.getItem("UserID"));
  const navigation = useNavigate();
  const handleSearch = () => {
    const encodedSearchItem = encodeURIComponent(searchItem.trim());
    if (encodedSearchItem) {
      window.location.href = `/home?search=${encodedSearchItem}`;
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("UserID");
    navigation("/");
  }
  console.log(loginedUser);
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <div className="nav-item left">
          <a className="title">Phim hay</a>
          <a href="./home" className="nav-link">
            Trang chủ
          </a>
        </div>

        {loginedUser ? (
          <div className="nav-item right">
            <span>Chào {loginedUser.name}!</span>
            <button onClick={() => handleLogout()}>
              Đăng xuất
            </button>
          </div>
        ) : (
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
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
