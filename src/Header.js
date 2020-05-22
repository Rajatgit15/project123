
import React from 'react';


import data from './data.json'

const Header = (props) => {
    console.log(props)
    return (
        <div className ="header">
            MY Project - {props.projectId}
        </div>
    );
};

export default Header;