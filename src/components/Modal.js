import React from 'react';
import SplitContent from './SplitContent';
import IconTextButton from './IconTextButton';


function Modal(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const title = props.title;
    const onClose = props.onClose;

    return <div className='Modal opaque-white-50'>
        <div className='large-container white shadow-large'>
            <div className='header'>
                <SplitContent
                    left = {[
                        <span>
                            {title}
                        </span>
                    ]}
                    right = {[
                        <IconTextButton icon = {'close'} onClick = {onClose}/>
                    ]}
                />
            </div>
            <div className='body'>
                {children}
            </div>
        </div>        
    </div>
}
export default Modal;