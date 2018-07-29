import React from 'react';

const Action = (props) => (
    <div>
        <button 
            className="big-button"
            disabled={props.isOptionsEmpty} 
            onClick={props.handlePick}>
            What do
        </button>
    </div>
);

export default Action;