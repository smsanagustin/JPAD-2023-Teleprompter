import React from 'react';


function IconTextButton(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const icon = props.icon;

    return <div className='IconTextButton'>
        {/* EDIT THE LAYOUT BELOW */}
        
        {children}
    </div>
}
export default IconTextButton;