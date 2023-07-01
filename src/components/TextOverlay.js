import React from 'react';


function TextOverlay(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const title = props.title;
    const onClick = props.onClick;

    return <div className='TextOverlay opque-accent-05 appear-on-hover' onClick={onClick}>
        {title}
        {children}
    </div>
}
export default TextOverlay;