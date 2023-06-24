import React from 'react';


function DocPage(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const value = props.value;
    const onChange = props.onChange;
    const placeholder = props.placeholder;

    return <div className='DocPage'>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
        <textarea
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
            className = "textInput no-appearance"
        />
    </div>
}
export default DocPage;