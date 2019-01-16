import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create_blog } from '../../actions/blogActions';
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
            fields["name"] = "";
            fields["category"] = "";
            this.setState({ fields: fields });
            this.props.create(this.props.token, this.state.fields.name, this.state.fields.category)
        }
    }
    
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "To pole jest wymagane. Proszę podać tytuł bloga!";
        }
        if (!fields["category"]) {
            formIsValid = false;
            errors["category"] = "To pole jest wymagane. Proszę wybrać kategorię bloga!";
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
                    <h1 className="AddBlogPanel--title">DoDAj nOWego BlOgA</h1>
                    <br />
                    <input type="text" name="name" className="AddBlogPanel--input" value={this.state.fields.title} onChange={this.handleChange} placeholder="Podaj nazwę Bloga" />
                    <br />
                    <div className="errorMessage">{this.state.errors.title}</div>
                    <div>
                        <label className="AddBlogPanel--label-first">Wybierz kategorię bloga:
                        <br/>
                            <select className="AddBlogPanel--select" name="category" value={this.state.fields.category} onChange={this.handleChange}>
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
                    </div>
                        <br />
                    <input type="submit" className="AddBlogPanel--submit" />
                    <br />
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (token, name, category) => dispatch(create_blog(token, name, category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogPanel);