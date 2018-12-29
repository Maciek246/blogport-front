import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import MainPage from './components/MainPage';
import BlogLovWeb from './components/BlogLovWeb';
import { Provider } from 'react-redux';
import store from './stores';
import './assets/css/fonts.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavbar/> 
        <Router>
          <React.Fragment>
            <Route exact path="/" component={MainPage} />
            <Route path="/:slug" component={BlogLovWeb} />
            <Route path="/:category" component="" />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
