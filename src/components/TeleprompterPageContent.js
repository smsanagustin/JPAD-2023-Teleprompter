import React from 'react';


function TeleprompterPageContent(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;

    return <div className='TeleprompterPageContent'>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
    </div>
}
export default TeleprompterPageContent;