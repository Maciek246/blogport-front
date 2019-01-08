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
                    <div>
                        <label className="AddBlogPanel--label">Wybierz kategorię bloga:
                        <br />
                            <select className="AddBlogPanel--select" onChange={this.props.handleOnChange}>
                                <option value="">All</option>
                                <option value="Design">Design</option>
                                <option value="Technology">Technology</option>
                                <option value="Sport">Sport</option>
                                <option value="Travel">Travel</option>
                                <option value="Lifestyle">Lifestyle</option>
                            </select>
                        </label>
                    </div>
                    <br />
                    <input type="submit" className="AddBlogPanel--submit" />
                    <br />
                </div>
            </form>
        )
    }
}

export default AddBlogPanel;