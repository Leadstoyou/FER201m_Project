import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router";


function Details() {

    const [score, setScore] = useState(0);
    const [nameFilm, setNameFilm]=useState('');
    const [catagory, setCatagory]=useState('');
    const [description, setDescription]=useState('');
    const [imageUrl,setImageUrl]=useState('');
const [comment, setComment] = useState('');
const [comments, setComments] = useState([]);
const [films, setFilms] = useState([]);

useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
        setComments(JSON.parse(storedComments));
    }
}, []);

useEffect(() => {
    const storedFilms = localStorage.getItem('films');
    if (storedFilms) {
        setFilms(JSON.parse(storedFilms));
    }
}, []);

// useEffect(() => {
//     localStorage.setItem('comments', JSON.stringify(comments));
// }, [comments]);

const handleSubmit = (event) => {
    event.preventDefault();
    
    setComments([...comments, { comment}]);
    setFilms([...films, {films}])
    setScore(0);
    setComment('');
}

return (
    <div>
        <Navbar />
        <div className="movie-screen">
            <div className="img-details">
                {/* Add image here */}
                <img src={films.imageUrl} alt={films.nameFilm}  />
            </div>
            <div className="movie-details">
                <h1>{films.name}</h1>
                <h2>Thể loại: {films.catagory}</h2>
                <p>Mô tả: {films.description}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Rating:
                        <input type="number" value={score} onChange={(event) => setScore(event.target.value)} />
                    </label>
                    <label>
                        Comment:
                        <textarea value={comment} onChange={(event) => setComment(event.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h4>Bình luận:</h4>
                {comments.map((c, i) => (
                    <div key={i}>
                        <p>{c.username}: {c.comment}</p>
                        
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
);

}

export default Details;