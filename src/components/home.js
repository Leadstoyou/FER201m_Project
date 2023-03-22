import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./home.css";
import categories from "../Categories.json";
const Home = () => {
  const [films, setfilms] = useState(JSON.parse(localStorage.getItem("films")));
  const [listCategory, setlistCategory] = useState(categories);
  console.log(films, listCategory);
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home_wrap">
          <div className="albums_category">
            <div className="albums_title">
              <h2>TYPE:</h2>
              <ul>
                {listCategory.map((category, index) => (
                  <li key={index}>
                    <a style={{textDecoration: "none", color: "#3b5998"}} href={`/home/category${category.id}`}>{category.category}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="album_items_container">
            <div className="albums_items">
              {films.map((film, index) => (
                <div
                  className="albums_items_wrap"
                  style={{ border: "1px solid #ccc", marginRight: "30px" }}
                  key={index}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      alt:`Picture #${index}`
                    }}
                    src={film.imageUrl}
                  />
                  <div className="album_des">
                    <h4 style={{display: "flex"}}>Name: {film.name}</h4>  
                  </div>
                  <div className="album_des">
                    <h4 style={{color: "orange", display: "flex"}}>Type: {film.category}</h4>
                  </div>
                  <div className="album_des">
                    <h4 style={{color: "green", display: "flex"}}>Score: {film.score}</h4>
                  </div>
                  <button className="album_but">Comment</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
