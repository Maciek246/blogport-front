import React, { Component } from 'react';
import BlogList from './components/BlogList'
import MainNavbar from './components/MainNavbar'
import CategoryNabbar from './components/CategoryNavbar';
import './assets/css/fonts.css'

class App extends Component {
  render() {
    return (
      <div>
        <MainNavbar/> 
        <CategoryNabbar/> 
        <BlogList/>
      </div>
    );
  }
}

export default App;
