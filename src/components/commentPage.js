import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import './comment.css'


function CommentPage() {

    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }
        return (
            <div>
                <Navbar />
                <div className="movie-screen">
                    {/* Movie details */}
                    <div className="movie-details">
                        <h1>Movie Name</h1>
                        <h2>Catagory</h2>
                        <p>Movie Description</p>
                    </div>

                    {/* Comment and rating form */}
                    <form className="comment-form" onSubmit={handleSubmit}>
                        <h3>Add a comment and rating</h3>
                        <textarea
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                            placeholder="Enter your comment here"
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }

    export default CommentPage;