import React, { Component } from 'react';
import './style.css';

class AddBlogPanel extends Component {

    handleselectedFile = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    render() {
        return (
            <form>
                <div className="AddBlogPanel--container">
                    <h1 className="AddBlogPanel--title">DODAJ NOWEGO BLOGA</h1>
                    <br />
                    <input type="text" className="AddBlogPanel--input" placeholder="Podaj nazwę Bloga" required />
                    <br />
                    <div>
                        <label className="AddBlogPanel--label-first">Wybierz kategorię bloga:
                        <br />
                            <select className="AddBlogPanel--select" onChange={this.props.handleOnChange} required>
                                <option value="">All</option>
                                <option value="Design">Design</option>
                                <option value="Technology">Technology</option>
                                <option value="Sport">Sport</option>
                                <option value="Travel">Travel</option>
                                <option value="Lifestyle">Lifestyle</option>
                            </select>
                        </label>
                        <br /><br />
                        <label className="AddBlogPanel--label-second">Dodaj logo w postaci pliku:
                    <br />
                            <input className="AddBlogPanel--file" type="file" onChange={this.handleselectedFile} required />
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