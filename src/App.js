import React, { Component } from 'react';
import BlogList from './components/BlogList'
import MainNavbar from './components/MainNavbar'
import './assets/css/fonts.css'

class App extends Component {
  render() {
    return (
      <div id="container">
        <div className="MainNavbar">
            <MainNavbar/>
        </div>   
        <BlogList/>
      </div>
    );
  }
}

export default App;
