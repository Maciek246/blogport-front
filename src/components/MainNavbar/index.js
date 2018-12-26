import React, { Component } from 'react';
import style from './style.css';
import 'font-awesome/css/font-awesome.min.css';

class MainNavbar extends Component {
    render(){
        return(
         <nav> 
            <div className="main-navbar">
                <div className="main-navbar main-navbar--content-left">
                    <div className="main-navbar main-navbar--search">
                    <span className="icon"><i className="fa fa-search" aria-hidden="true"></i></span>
                    <input id="search"type="text" placeholder="Podaj szukaną frazę"/>   
                    </div>
                </div>
                <div className="main-navbar main-navbar--content-right">
                    <button className="button--main-navbar">Zarejestruj się</button>
                    <button className="button--main-navbar">Zaloguj się</button>
                </div>
            </div>
          </nav>
        );
    }
}

export default MainNavbar;
