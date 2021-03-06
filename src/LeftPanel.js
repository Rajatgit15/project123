
import React from 'react';
import data from './data.json'

import { BrowserRouter as Router, Link} from 'react-router-dom'


const LeftPanel = () => {
    return (
        <div className="panel">
        <input  className = "search" type = "text" placeholder ="search ..."/>
        <div >
            {data.map((el,i)=>{
                 return(
                     <div key = {i}>
                         <li><Link to =  {`/${el.id}`}>{el.title}</Link></li>
                     </div>
                 )
            })}

            <h1>
               
            </h1>
        </div>
        </div>
    );
};

export default LeftPanel;