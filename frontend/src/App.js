import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
