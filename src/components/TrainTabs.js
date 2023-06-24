import React from 'react';


function TrainTabs(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const tabs = props.tabs;

    return <div className='TrainTabs'>
        {children}
        {tabs.map((tab) => 
            <div className = {`tab ${tab.isSelected ? 'highlight-1' : ''}`} onClick = {tab.onClick}>
                {tab.tabname}
                
            </div>
        )}
    </div>
}
export default TrainTabs;