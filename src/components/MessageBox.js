import React from 'react';

export default(props) => {
    return <div className={`message-box message-box-${props.color}`}>
        <div className="text">
          	<span dangerouslySetInnerHTML={{__html: props.character}}></span> {props.title}
        </div>
    </div>
}
