import React, { useState } from 'react';
import {MODES, FONT_SIZE_LIMITS, SCROLL_SPEED_LIMITS, FONTS, COLORS} from '../model/values';


function Teleprompter() {
    const [text, setText] = useState("");
    const [selectedMode, setSelectedMode] = useState(MODES.defaultval);
    const [position, setPosition] = useState(0);
    const [scrollSpeed, setScrollSpeed] = useState(SCROLL_SPEED_LIMITS.defaultval);
    const [selectedFont, setSelectedFont] = useState(FONTS.defaultval);
    const [selectedTextColor, setSelectedTextColor] = useState(COLORS.defaultval);
    const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(COLORS.BLACK);

    return <>
        You are now in the Teleprompter page
    </>;
}

export default Teleprompter;
