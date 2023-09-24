import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Resultpage from './components/Pages/Resultpage';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Search from "./components/Pages/Search";
function App() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/result" element={<Resultpage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
