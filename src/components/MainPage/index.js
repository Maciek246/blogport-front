import React, { Component } from 'react';
import CategoryNavbar from '../CategoryNavbar';
import BlogList from '../BlogList';

class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <CategoryNavbar />
        <BlogList />
      </div>
    );
  }
}

export default MainPage;
