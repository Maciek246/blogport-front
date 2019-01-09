import React, { Component } from 'react';
import './style.css';

class AddPostPanel extends Component {


    render() {

        return (
            <form>
                <div className="AddPostPanel--container">
                    <h1 className="AddPostPanel--title">DODAJ NOWEGO POSTA</h1>
                    <br />
                    <input type="text" className="AddPostPanel--input" placeholder="Tytuł" required />
                    <br />
                    <textarea className="AddPostPanel--textarea" required></textarea>
                    <br />
                    <input type="submit" className="AddPostPanel--submit" />
                    <br />
                </div>
            </form>
        );
    }
}


export default AddPostPanel;
