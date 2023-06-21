import React from 'react';


function TeleprompterRibbon(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;

    return <div className='TeleprompterRibbon'>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
    </div>
}
export default TeleprompterRibbon;