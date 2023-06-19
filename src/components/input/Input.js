import React from 'react';
import './input.scss';

function Input(props) {
    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={ (e) => props.onChange(e)}
            />
        </div>
    );
}

export default Input;
