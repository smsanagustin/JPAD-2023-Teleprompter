import React from 'react';


function Center(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;

    return <div className='Center'>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
    </div>
}
export default Center;