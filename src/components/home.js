import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
			<div className="home_wrap">
				<div className="albums_category">
					<div className="albums_title"> TYPE
                    <ul>
                        <li><a href="">Action</a></li>
                        <li><a href="">Cartoon</a></li>
                        <li><a href="">Horror</a></li>
                        <li><a href="">Science-Art</a></li>
                        <li><a href="">Romantic</a></li>
                    </ul>
					</div>
				</div>
				<div className="albums_items">
					<div className="albums_items_wrap" style={{border: "1px solid #ccc", marginRight: "30px"}}>
						<img style={{width: "100%", height: "300px", objectFit: "cover"}} src="https://upload.wikimedia.org/wikipedia/vi/a/ab/Titanic_3D_poster_Vietnam.jpg"/>
                        <div className="album_des"><h5>Name:</h5> </div>
                        <div className="album_des"><h5>Type:</h5></div>
                        <div className="album_des"><h5>Score:</h5> </div>
                        <button className="album_but">Comment</button>
					</div>
                    <div className="albums_items_wrap" style={{border: "1px solid #ccc", marginRight: "30px"}}>
						<img style={{width: "100%", height: "300px", objectFit: "cover"}} src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg"/>
                        <div className="album_des"><h5>Name:</h5> </div>
                        <div className="album_des"><h5>Type:</h5></div>
                        <div className="album_des"><h5>Score:</h5> </div>
                        <button className="album_but">Comment</button>
					</div>
                    <div className="albums_items_wrap" style={{border: "1px solid #ccc", marginRight: "30px"}}>
						<img style={{width: "100%", height: "300px", objectFit: "cover"}} src="https://cdn.gamerjournalist.com/primary/2021/01/Genshin-Impact-Ganyu-Talents-Constellations-and-Ascension-Materials.jpg"/>
                        <div className="album_des"><h5>Name:</h5> </div>
                        <div className="album_des"><h5>Type:</h5></div>
                        <div className="album_des"><h5>Score:</h5> </div>
                        <button className="album_but">Comment</button>
					</div>
                    <div className="albums_items_wrap" style={{border: "1px solid #ccc", marginRight: "30px"}}>
						<img style={{width: "100%", height: "300px", objectFit: "cover"}} src="https://cdn.gamerjournalist.com/primary/2021/01/Genshin-Impact-Ganyu-Talents-Constellations-and-Ascension-Materials.jpg"/>
                        <div className="album_des"><h5>Name:</h5> </div>
                        <div className="album_des"><h5>Type:</h5></div>
                        <div className="album_des"><h5>Score:</h5> </div>
                        <button className="album_but">Comment</button>
					</div>
                    <div className="albums_items_wrap" style={{border: "1px solid #ccc", marginRight: "30px"}}>
						<img style={{width: "100%", height: "300px", objectFit: "cover"}} src="https://cdn.gamerjournalist.com/primary/2021/01/Genshin-Impact-Ganyu-Talents-Constellations-and-Ascension-Materials.jpg"/>
                        <div className="album_des"><h5>Name:</h5> </div>
                        <div className="album_des"><h5>Type:</h5></div>
                        <div className="album_des"><h5>Score:</h5> </div>
                        <button className="album_but">Comment</button>
					</div>
				</div>
			</div>
		</div>
      <Footer />
    </div>
  );
};

export default Home;