import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';


class UserPanel extends Component{
    render(){
        const { username, email } = this.props;
        const blog = this.props.blogs.filter(blog => blog.author === username)
        return(
            <div className="UserPanel--container">
                <h1 className="UserPanel--title">Panel Użytkownika</h1>
                <div>Twój nickname: {username}</div>
                <div>Twój email: {email}</div>
                <fieldset className="UserPanel--fieldset">
                    <legend className="UserPanel--legend"><h2 className="UserPanel--titlePass">Ustawienia bloga</h2></legend>
                        <div>Twój blog: {blog[0].name}</div>
                </fieldset>
                <fieldset className="UserPanel--fieldset">
                    <legend className="UserPanel--legend"><h2 className="UserPanel--titlePass">Zmiana hasła</h2></legend>
                        <label for="password1">Podaj hasło: </label>
                        <br/>
                        <input type="password" name="password1" className="UserPanel--passwordInput"/>
                        <br/>
                        <label for="password2">Powtórz hasło: </label>
                        <br/>
                        <input type="password" name="password2" className="UserPanel--passwordInput"/>
                        <br/>
                        <input type="submit" name="submit" value="Zmień hasło" className="UserPanel--submit"/>
                </fieldset>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username,
        email: state.user.email,
        blogs: state.blog.blogs
    }
}

export default connect(mapStateToProps)(UserPanel);
