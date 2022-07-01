// import logo from './logo.svg';
import React from 'react';
import About from './component/About';
import Contect from './component/Contect';
import Feature from './component/Feature';
import Header from './component/home';
import Navbar from './component/Navbar';
import Offer from './component/Offer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contect />
    
    </div>
  );
}

export default App;
