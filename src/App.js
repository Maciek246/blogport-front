import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import MainPage from './components/MainPage';
import AddPost from './components/AddPostPanel';
import AddBlog from './components/AddBlogPanel';
import BlogLovWeb from './components/BlogLovWeb';
import UserPanel from './components/UserPanel';
import { Provider } from 'react-redux';
import CategoryError from './components/CategoryError';
import store from './stores';
import './assets/css/fonts.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <MainNavbar/>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/user/:username" component={UserPanel} />
            <Route exact path="/addblog" component={AddBlog} />
            <Route exact path="/blog/:slug" component={BlogLovWeb} />
            <Route exact path="/blog/:slug/addpost" component={AddPost} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
