import React from 'react';


function PanelTab(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const tabname = props.tabname;
    const onClick = props.onClick

    return <div className='PanelTab' onClick={onClick}>
        {/* EDIT THE LAYOUT BELOW */}
    </div>
}
export default PanelTab;