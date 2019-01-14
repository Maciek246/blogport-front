import React, {Component} from 'react';
import Entry from '../Entry';
import './style.css';
import header from '../../assets/images/weddingheader.png';

import { mock_entries } from '../../mocks';


class BlogLovWeb extends Component{
    render(){
        return(
            <div className="BlogLovWeb--container">
                <div className="BlogLovWeb--header">
                    <img src={header} alt="header" className="BlogLovWeb--header-img"/>
                </div>
                <div className="BlogLovWeb--content-container">

                {mock_entries.map(entry => <Entry key={entry.title} entry={entry}/>)}

                <div className="BlogLovWeb--footer">
                
                </div>
                
                </div>
            </div>
        );
    }
}
export default BlogLovWeb;
