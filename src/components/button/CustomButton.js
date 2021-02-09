import React, {Component} from 'react';

const CustomButton = ({children, ...otherProps}) => {
    <button className="btn btn-primary" {...otherProps}>
        {children}
    </button>
}

export default CustomButton;