import React from 'react';


function Grid(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;

    return <div className='Grid'>
        {children}
    </div>
}
export default Grid;