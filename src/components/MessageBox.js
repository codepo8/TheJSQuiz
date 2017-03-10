import React from 'react';

export default (props) => {
    return <div className={`message-box color-${props.color}`}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
    </div>;
}
