import React from 'react';
import TextOverlay from './TextOverlay'


function ImageTextCard(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const image = props.image;
    const title = props.title;
    const subtitle = props.subtitle;
    const onClick = props.onClick;

    return <div className='ImageTextCard hover-background-highlight-light gray1'>
        {image}
        <span className='title'>{title}</span>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
        <TextOverlay onClick={onClick}>{subtitle}</TextOverlay>
    </div>
}
export default ImageTextCard;