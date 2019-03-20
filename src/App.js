import React, { Component } from 'react';
import './App.css';

// custom components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Days from './components/Days/Days';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          {window.innerWidth > '960' && <Navbar />}
          <Days />
        </div>
      </div>
    );
  }
}

export default App;
