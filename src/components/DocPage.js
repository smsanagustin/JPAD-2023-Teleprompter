import React, { useRef, useEffect } from 'react';



function DocPage(props){
    //  access properties through props.propertyName
    //  obtain the subcomponents inside it throught props.children
    const children = props.children;
    const value = props.value;
    const onChange = props.onChange;
    const placeholder = props.placeholder;



    const basePagePixelSize = 66 * 16;
    const textInputRef = useRef(null);

    useEffect(() => {
        const textInput = textInputRef.current;
        if (textInput) {
        textInput.style.height = 'auto';
        textInput.style.height = basePagePixelSize > textInput.scrollHeight ? `${basePagePixelSize}px` : `${textInput.scrollHeight}px`;
        }
    });

    const handleInput = event => {
        const textInput = event.target;
        textInput.style.height = 'auto';
        textInput.style.height = basePagePixelSize > textInput.scrollHeight ? `${basePagePixelSize}px` : `${textInput.scrollHeight}px`;
      };



    return <div className='DocPage'>
        {/* EDIT THE LAYOUT BELOW */}
        {children}
        <textarea
            ref={textInputRef}
            onInput={handleInput}

            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
            className = "textInput no-appearance"
        />
    </div>
}
export default DocPage;