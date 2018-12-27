import React, {Component} from 'react';
import './style.css';
import header from '../../assets/images/weddingheader.png';


class BlogLovWeb extends Component{
    render(){
        return(
            <div className="BlogLovWeb--container">
                <div className="BlogLovWeb--header">
                    <img src={header} alt="header" className="BlogLovWeb--header-img"/>
                </div>
                <div className="BlogLovWeb--content-container">
                <div className="BlogLovWeb--content">
                    <h1 className="BlogLovWeb--title">Title</h1>
                    <p className="BlogLovWeb--text">
                        Non irure ipsum amet nulla enim veniam laboris cupidatat aliqua enim amet. Officia sit cupidatat ex aliqua sit Lorem laborum incididunt consectetur. Ad do sunt anim enim consequat dolore incididunt ea amet reprehenderit nisi tempor.
                    </p>
                    <a className="BlogLovWeb--comment">Skomentuj</a>
                </div>
                <div className="BlogLovWeb--content">
                    <h1 className="BlogLovWeb--title">Title</h1>
                    <p className="BlogLovWeb--text">
                        Non irure ipsum amet nulla enim veniam laboris cupidatat aliqua enim amet. Officia sit cupidatat ex aliqua sit Lorem laborum incididunt consectetur. Ad do sunt anim enim consequat dolore incididunt ea amet reprehenderit nisi tempor.
                    </p>
                    <a className="BlogLovWeb--comment" >Skomentuj</a>
                </div>
                <div className="BlogLovWeb--content">
                    <h1 className="BlogLovWeb--title">Title</h1>
                    <p className="BlogLovWeb--text">
                        Non irure ipsum amet nulla enim veniam laboris cupidatat aliqua enim amet. Officia sit cupidatat ex aliqua sit Lorem laborum incididunt consectetur. Ad do sunt anim enim consequat dolore incididunt ea amet reprehenderit nisi tempor.
                    </p>
                    <a className="BlogLovWeb--comment">Skomentuj</a>
                </div>
                <div className="BlogLovWeb--footer">
                <p>Aliquip commodo id id incididunt ad in eiusmod. Consectetur culpa esse proident adipisicing est 
                    adipisicing. Officia nisi ipsum nostrud adipisicing id nulla eiusmod anim officia ipsum qui 
                    incididunt pariatur. Nisi et laboris Lorem velit adipisicing.</p>
                </div>
                </div>
            </div>
        );
    }
}
export default BlogLovWeb;