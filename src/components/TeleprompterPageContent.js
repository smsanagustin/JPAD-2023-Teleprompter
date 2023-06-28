import React from 'react';


function TeleprompterPageContent(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const {bg, children} = props;
    
    return <div className='TeleprompterPageContent centered-div' style={{backgroundColor: bg}}>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
    </div>
}
export default TeleprompterPageContent;