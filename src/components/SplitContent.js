import React from 'react';


function SplitContent(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const elemArrLeft = props.left;
    const elemArrRight = props.right;

    return <div className = 'SplitContent'>
        {/* EDIT THE LAYOUT BELOW */}
        <div className = 'left'>
            {elemArrLeft.map((val) => val)}
        </div>
        <div className = 'right'>
            {elemArrRight.map((val) => val)}
        </div>
    </div>
}
export default SplitContent;