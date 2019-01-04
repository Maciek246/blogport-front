import React, { Component } from 'react';
import './style.css';

class Entry extends Component {
  render() {
    const {
      title, content, createdAt, updatedAt,
    } = this.props.entry;
    return (
      <div className="Entry--content">
        <h1 className="Entry--title">{title}</h1>
        <p className="Entry--text">
          {content}
        </p>
        <p className="Entry--dates">
Dodano:
          {createdAt}
          {' '}
Edytowano:
          {updatedAt}
        </p>
        <a className="Entry--comment">Skomentuj</a>
      </div>
    );
  }
}

export default Entry;
