import React from 'react';

const Option = (props) => {
    const onClickHandler = () => props.handleDeleteOption(props.option);

    return (
        <div>
            {props.option} 
            <button onClick={onClickHandler}>
                Delete
            </button>
        </div>
    );
}

export default Option;