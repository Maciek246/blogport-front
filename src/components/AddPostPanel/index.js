import React, { Component } from 'react';
import './style.css';

class AddPostPanel extends Component {
  render() {
    return (
      <form>
        <div className="AddPostPanel--container">
          <h1 className="AddPostPanel--title">DODAJ POST</h1>
          <br />
          <input type="text" className="AddPostPanel--input" placeholder="Tytuł" />
          <br />
          <textarea className="AddPostPanel--textarea" />
          <br />
          <input type="submit" className="AddPostPanel--submit" />
          <br />
        </div>
      </form>
    );
  }
}


export default AddPostPanel;
