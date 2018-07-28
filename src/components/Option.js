import React from 'react';

const Option = (props) => (
    <div>
        {props.option} 
        <button 
            className="button button--link"
            onClick={() => props.handleDeleteOption(props.option)}>
            Delete
        </button>
    </div>
);

export default Option;