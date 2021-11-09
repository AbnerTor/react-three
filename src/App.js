import React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowswerRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="flex flex-col">
    <NavBar />
    <Header />
    <Footer />
    </div>
  );
}

export default App;
