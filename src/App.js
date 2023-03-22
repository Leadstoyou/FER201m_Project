import './App.css';
import Login from './components/login'
import Register from './components/register';
import CommentPage from './components/commentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/comment" element={<CommentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
