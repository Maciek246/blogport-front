import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory } from '../../actions/applicationActions';
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
                    <a onClick={() => {this.props.selectCategory('Design')}}>Design</a>
                    <a onClick={() => {this.props.selectCategory('Technology')}}>Technology</a>
                    <a onClick={() => {this.props.selectCategory('Sport')}}>Sport</a>
                    <a onClick={() => {this.props.selectCategory('Tavel')}}>Travel</a>
                    <a onClick={() => {this.props.selectCategory('Lifestyle')}}>Lifestyle</a>
                </span>
            </div>
        );
    }
}

const mapDispatchToProps = {
        selectCategory: setCategory
}

/*
                    <Link className="link" to="/design">Design</Link>
                    <Link className="link" to="/technology">Technology</Link>
                    <Link className="link" to="/sport">Sport</Link>
                    <Link className="link" to="/travel">Travel</Link>
                    <Link className="link" to="/lifestyle">Lifestyle</Link>

*/

export default connect(null, mapDispatchToProps)(CategoryNavbar);