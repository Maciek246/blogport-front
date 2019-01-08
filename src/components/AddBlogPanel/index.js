import React, { Component } from 'react';
import './style.css';

class AddBlogPanel extends Component {

    render() {
        return (
            <form>
                <div className="AddBlogPanel--container">
                    <h1 className="AddBlogPanel--title">DODAJ BLOGA</h1>
                    <br />
                    <input type="text" className="AddBlogPanel--input" placeholder="Podaj nazwę Bloga" />
                    <br />
                    <input type="submit" className="AddBlogPanel--submit" />
                    <br />
                </div>
            </form>
        )
    }
}

export default AddBlogPanel;