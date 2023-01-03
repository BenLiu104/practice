// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoPage from './page/TodoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BasketballTeam from './page/BasketballTeam';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Todo" element={<TodoPage />}></Route>
          <Route path="/basketballTeam" element={<BasketballTeam />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
