import React, { Component } from 'react';
import './style.css';

class AddBlogPanel extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitAddBlogForm = this.submitAddBlogForm.bind(this);

    };
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submitAddBlogForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["title"] = "";
            fields["category"] = "";
            fields["logoFile"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }

    }
    handleselectedFile = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["title"]) {
            formIsValid = false;
            errors["title"] = "To pole jest wymagane. Proszę podać tytuł bloga!";
        }
        if (!fields["category"]) {
            formIsValid = false;
            errors["category"] = "To pole jest wymagane. Proszę wybrać kategorię bloga!";
        }

        if (!fields["logoFile"]) {
            formIsValid = false;
            errors["logoFile"] = "Nie dodano pliku. Proszę dodać plik z logiem bloga!";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
            <form name="addBlogForm" onSubmit={this.submitAddBlogForm}>
                <div className="AddBlogPanel--container">
                    <h1 className="AddBlogPanel--title">DODAJ NOWEGO BLOGA</h1>
                    <br />
                    <input type="text" name="title" className="AddBlogPanel--input" value={this.state.fields.title} onChange={this.handleChange} placeholder="Podaj nazwę Bloga" />
                    <br />
                    <div className="errorMessage">{this.state.errors.title}</div>
                    <div>
                        <label className="AddBlogPanel--label-first">Wybierz kategorię bloga:
                        <br />
                            <select className="AddBlogPanel--select" name="category" value={this.state.fields.category} onChange={this.handleChange}>
                                <option value="">All</option>
                                <option value="Design">Design</option>
                                <option value="Technology">Technology</option>
                                <option value="Sport">Sport</option>
                                <option value="Travel">Travel</option>
                                <option value="Lifestyle">Lifestyle</option>
                            </select>
                        </label>
                        <br />
                        <div className="errorMessage">{this.state.errors.category}</div>
                        <br /><br />
                        <label className="AddBlogPanel--label-second">Dodaj logo w postaci pliku:
                    <br />
                            <input className="AddBlogPanel--file" type="file" name="logoFile" value={this.state.fields.logoFile} onChange={this.handleChange} />
                        </label>
                        <div className="errorMessage">{this.state.errors.logoFile}</div>
                    </div>
                    <br />
                    <input type="submit" className="AddBlogPanel--submit" />
                    <br />
                </div>
            </form>
        );
    }
}

export default AddBlogPanel;