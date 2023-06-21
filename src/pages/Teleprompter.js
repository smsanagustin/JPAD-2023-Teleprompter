import React, { useState } from 'react';
import {TAB_NAMES, MODES, FONT_SIZE_LIMITS, SCROLL_SPEED_LIMITS, FONTS, COLORS} from '../model/values';

import Center from '../components/Center';
import PanelTab from '../components/PanelTab';
import SplitContent from '../components/SplitContent';
import TeleprompterPageContent from '../components/TeleprompterPageContent.js';
import TeleprompterRibbon from '../components/TeleprompterRibbon';

function Teleprompter() {

    //  Add states as necessary
    const [tab, setTab] = useState(TAB_NAMES.defaultval);
    const [text, setText] = useState("");
    const [selectedMode, setSelectedMode] = useState(MODES.defaultval);
    const [position, setPosition] = useState(0);
    const [scrollSpeed, setScrollSpeed] = useState(SCROLL_SPEED_LIMITS.defaultval);
    const [selectedFont, setSelectedFont] = useState(FONTS.defaultval);
    const [selectedTextColor, setSelectedTextColor] = useState(COLORS.defaultval);
    const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(COLORS.BLACK);
    

    
    //  edit to add functionalities
    return <div className='Teleprompter-Page'>
        http://localhost:3000/teleprompter
        {/*  TeleprompterRibbon IS SIMILAR TO THE RIBBON OF GOOGLE FORMS*/}
        <TeleprompterRibbon>
            Ribbon
            <SplitContent
                left={[]} // insert the array of components
                right={[]}  //insert the array of components
            />
            <Center>
                <PanelTab tabname={''} onClick={()=>{}}/>
                <PanelTab tabname={''} onClick={()=>{}}/>
                <PanelTab tabname={''} onClick={()=>{}}/>
                
            </Center>
        </TeleprompterRibbon>


        {   //  SHOW THIS CONTENT IN THE BODY WHEN THE "TEXT" TAB IS SELECTED
            tab == TAB_NAMES.text ? <TeleprompterPageContent>
                TeleprompterPageContent
                {
                }
            </TeleprompterPageContent> : null
        }



        {   //  SHOW THIS CONTENT IN THE BODY WHEN THE "TELEPROMPTER" TAB IS SELECTED
            tab == TAB_NAMES.teleprompter ? <TeleprompterPageContent>
                TeleprompterPageContent
                {
                }
            </TeleprompterPageContent> : null
        }

    </div>;
}

export default Teleprompter;
