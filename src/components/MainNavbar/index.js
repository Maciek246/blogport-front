import React, { Component } from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

class MainNavbar extends Component {
    render(){
        return(
        <nav> 
            <div className="main-navbar">
                <div className="main-navbar main-navbar--content-left">
                    <div className="main-navbar main-navbar--search">
                        <input id="search"type="text" placeholder=" &#xF002; Podaj szukaną frazę"/>   
                    </div>
                </div>
            </div>
        </nav>
        );
    }
}

export default MainNavbar;
