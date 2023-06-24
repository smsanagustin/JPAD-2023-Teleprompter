import React from 'react';


function IconTextButton(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const icon = props.icon;
    const onClick = props.onClick;

    return <div
        onClick={onClick}
        className={
        `IconTextButton hover-content-highlight pointer hover-gray
        ${children != null && children != undefined ? 'rounded-corner'
        : icon != null && icon != undefined ? 'round-3sd'
        : ''}`}>
        {/* EDIT THE LAYOUT BELOW */}
        {   icon != null && icon != undefined
            ? <div className='icon'>
                <span className="material-symbols-rounded"> {icon}</span>
            </div>
            : null}
        {   children != null && children != undefined
            ? <div className='children'>
                {children.map((elem) => elem)}
            </div>
            : null}
    </div>
}
export default IconTextButton;