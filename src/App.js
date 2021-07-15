import React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex flex-col">
    <Header />
    <NavBar />
    <Footer className="clear-both" />
    </div>
  );
}

export default App;
