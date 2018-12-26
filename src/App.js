import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import MainPage from './components/MainPage';
import BlogLovWeb from './components/BlogLovWeb';
import './assets/css/fonts.css'

class App extends Component {
  render() {
    return (
      <div>
        <MainNavbar/> 
        <Router>
          <div>
            <Route path="/mainpage" component={MainPage}/>
            <Route path="/bloglovweb" component={BlogLovWeb}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
