import React, {Component} from 'react';
import './style.css';
import navbar_img2 from '../../assets/images/navbar_img2.jpg';


class CategoryNavbar extends Component{
    render(){
        return(
            <div className="CategoryNavbarContainer">
                <img src={navbar_img2} alt="navbar img" className="navbar--img2"/>
                <span className="BlogportLogo--container">
                    <a>BlOGPoRt</a>
                </span>
                <span className="CategoryList">
                    <a>Design</a>
                    <a>Technology</a>
                    <a>Sport</a>
                    <a>Travel</a>
                    <a>Lifestyle</a>
                </span>
               
              
                <p>TEST TEST</p>
            </div>
        );
    }
}
export default CategoryNavbar;