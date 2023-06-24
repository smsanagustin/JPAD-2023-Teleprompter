import React from 'react';


function ImageTextCard(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const image = props.image;
    const title = props.title;
    const onClick = props.onClick;

    return <div className='ImageTextCard' onClick={onClick}>
        {image}
        <span className='title'>{title}</span>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
    </div>
}
export default ImageTextCard;