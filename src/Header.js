
import React from 'react';


import data from './data.json'

const Header = (props) => {
    
    return (
        <div className ="header">
            MY Project - {props.projectId}
        </div>
    );
};

export default Header;