import React, { Component } from 'react';
import './style.css';

class CategoryError extends Component {
  render() {
    return (
      <div className="CategoryError-container">
        <span className="CategoryError--error">Nie ma bloga w wybranej kategorii.</span>
      </div>
    );
  }
}

export default CategoryError;
