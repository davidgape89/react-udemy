import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={props.isOptionsEmpty} 
                onClick={props.handlePick}>
                What do
            </button>
        </div>
    );
}

export default Action;