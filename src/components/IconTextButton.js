import React from 'react';


function IconTextButton(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const icon = props.icon;
    const onClick = props.onClick;
    const className = props.className;

    return <div
        onClick={onClick}
        className={
        `IconTextButton hover-content-highlight pointer hover-gray ${className}
        ${children != null && children != undefined ? 'rounded-corner'
        : icon != null && icon != undefined ? 'round-3sd'
        : ''}`}>
        {/* EDIT THE LAYOUT BELOW */}
        {   icon != null && icon != undefined
            ?   <span className="icon material-symbols-rounded"> {icon}</span>
            : null}
        {children}
    </div>
}
export default IconTextButton;