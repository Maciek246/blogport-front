import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import MainPage from './components/MainPage';
import AddPost from './components/AddPostPanel';
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
            <Route exact path="/:slug" component={BlogLovWeb} />
            <Route exact path="/:slug/addpost" component={AddPost} /> 
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
