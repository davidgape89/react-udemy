import React from 'react';
import {NavLink} from 'react-router-dom';

const PortfolioPage = (props) => {
    console.log(props);
    return (
    <div>
        <h1>My Work</h1>
        <p>This is portfolio page, please select one of the items:</p>
        <ul>
            <li><NavLink to="/portfolio/1">Item one</NavLink></li>
            <li><NavLink to="/portfolio/2">Item two</NavLink></li>
        </ul>
    </div>
);};

export default PortfolioPage;