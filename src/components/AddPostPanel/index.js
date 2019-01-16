import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addpost } from '../../actions/blogActions';
import './style.css';

class AddPostPanel extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitAddPostForm = this.submitAddPostForm.bind(this);

    };
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submitAddPostForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["title"] = "";
            fields["content"] = "";
            this.setState({ fields: fields });
            this.props.addpost(this.props.token, this.props.blog_url, this.state.fields);
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["title"]) {
            formIsValid = false;
            errors["title"] = "To pole jest wymagane. Proszę podać tytuł bloga!";
        }
        if (!fields["content"]) {
            formIsValid = false;
            errors["content"] = "To pole jest wymagane. Proszę wpisać treść posta!";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
            <form name="addPostForm" onSubmit={this.submitAddPostForm}>
                <div className="AddPostPanel--container">
                    <h1 className="AddPostPanel--title">DODAJ NOWEGO POSTA</h1>
                    <br />
                    <input type="text" name="title" className="AddPostPanel--input" value={this.state.fields.title} onChange={this.handleChange} placeholder="Tytuł nowego posta" />
                    <br />
                    <div className="errorMessage">{this.state.errors.title}</div>
                    <br />
                    <textarea className="AddPostPanel--textPost" name="content" value={this.state.fields.textPost} onChange={this.handleChange} placeholder="Tutaj proszę wpisać treść posta" ></textarea>
                    <br />
                    <div className="errorMessage">{this.state.errors.textPost}</div>
                    <br />
                    <input type="submit" className="AddPostPanel--submit" />
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
        addpost: (token, slug, data) => dispatch(addpost(token, slug, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPanel);
