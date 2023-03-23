
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { useEffect } from "react";
import users from "./User.json";
import films from './Film.json';
import comments from './Comment.json';
import MovieDetails from './components/details'

function App() {
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("films", JSON.stringify(films));
    localStorage.setItem("comments", JSON.stringify(comments));

  }, []);



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/details/:movieId" element={<MovieDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
