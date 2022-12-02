// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoPage from './page/TodoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Todo" element={<TodoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
