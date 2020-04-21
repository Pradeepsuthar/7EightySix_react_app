import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header'
import { BodyContent } from './components/bodyContent/content'
import Footer from './components/footer/footer'

// Class Component
class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <BodyContent />
        <Footer />
      </div>
    );
  }
}


export default App;
