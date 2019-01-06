import React, {Component} from 'react';
import './style.css';


class UserPanel extends Component{
    render(){
        return(
            <div className="UserPanel--container">
                <h1 className="UserPanel--title">Panel Użytkownika</h1>
                <div>Twój nickname: </div>
                <fieldset className="UserPanel--fieldset">
                    <legend className="UserPanel--legend"><h2 className="UserPanel--titlePass">Ustawienia bloga</h2></legend>
                        <div>Twój blog: </div>
                        <div className="UserPanel--deleteButton">Usuń blog</div>
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
export default UserPanel;
