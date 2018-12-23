import React, { Component } from 'react';
import style from './style.css';

class MainNavbar extends Component {
    render(){
        return(
         <nav> 
        <div className="main-navbar">
            <div className="main-navbar main-navbar--content-left">
                 <input id="input--search"type="text" placeholder="Podaj szukaną frazę"/>   
            </div>
            <div className="main-navbar main-navbar--content-right">
                <button className="button--register">Zarejestruj się</button>
                <button className="button--login">Zaloguj się</button>
            </div>
          </div>
          </nav>
        );
    }
}

export default MainNavbar;
