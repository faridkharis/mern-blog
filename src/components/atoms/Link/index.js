import React from 'react';
import './link.scss';

const Link = ({ title, ...rest }) => {
    return <p className="link" {...rest}>{title}</p>
}

export default Link;