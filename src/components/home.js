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
              <ul>
                {listCategory.map((category, index) => (
                  <li key={index}>
                    <a href={`/home/category${category.id}`}>{category.category}</a>
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
                    <h5>Name:</h5>{film.name}
                  </div>
                  <div className="album_des">
                    <h5>Type:</h5>{film.category}
                  </div>
                  <div className="album_des">
                    <h5>Score:</h5>{film.score}
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
