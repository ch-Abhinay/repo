// import logo from './logo.svg';
// import './App.css';
// import Header from './Mycomponents/Header';
// import Footer from './Mycomponents/Footer';

// // header
// function App() {
//   return (
//     <>
//     <Header title="Todos"/>

//     <Footer/>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Mycomponents/Home';
import About from './Mycomponents/About';

function App() {
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
