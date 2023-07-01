import React from 'react';
import TextOverlay from './TextOverlay'


function ImageTextCard(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const image = props.image;
    const title = props.title;

    return <div className='ImageTextCard hover-background-highlight-light gray1 hover-content-highlight'>
        {image}
        <span className='title'>{title}</span>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
    </div>
}
export default ImageTextCard;