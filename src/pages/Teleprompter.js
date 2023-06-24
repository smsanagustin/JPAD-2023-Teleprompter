import React, { useState } from "react";
import {
  TAB_NAMES,
  MODES,
  FONT_SIZE_LIMITS,
  SCROLL_SPEED_LIMITS,
  FONTS,
  COLORS,
} from "../model/values";

import Center from "../components/Center";
import Header from "../components/Header";
import PanelTab from "../components/PanelTab";
import SplitContent from "../components/SplitContent";
import TeleprompterPageContent from "../components/TeleprompterPageContent.js";
import TeleprompterRibbon from "../components/TeleprompterRibbon";
import { Button, Drawer, Divider, Box } from "@mui/material";
import { TwitterPicker } from "react-color";
import { Twitter } from "@mui/icons-material";

function Teleprompter() {
  //  Add states as necessary
  const [tab, setTab] = useState(TAB_NAMES.defaultval);
  const [text, setText] = useState("");
  const [sidebar, setSideBar] = useState({ right: false });
  const [selectedMode, setSelectedMode] = useState(MODES.defaultval);
  const [position, setPosition] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(
    SCROLL_SPEED_LIMITS.defaultval
  );
  const [selectedFont, setSelectedFont] = useState("");
  //   const [selectedTextColor, setSelectedTextColor] = useState(COLORS.defaultval);
  const [selectedTextColor, setSelectedTextColor] = useState("#000000");
  const [selectedFontSize, setSelectedFontSize] = useState(12);
  const [selectedScrollSpeed, setSelectedScrollSpeed] = useState(50);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
    COLORS.BLACK
  );
  const [opacity, setOpacity] = useState(1);


  const RibbonLeftContent = [

  ];
  const RibbonRightContent = [
    <span class="material-symbols-rounded">
      palette
    </span>,
    <span class="material-symbols-rounded">
      slideshow
    </span>
  ];

  /* handles the changes when theres an input in the textarea */
  const handleTextChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const handleOpacityChange = (event) => {
    const newOpacity = parseFloat(event.target.value);
    setOpacity(newOpacity);
    document.documentElement.style.opacity = opacity;
  };


  const handleFontChange = (event) => {
    const {newFont} = event.target;
    setSelectedFont(newFont);
  };

  /* depending on the key/mouse pressed it would open/close the sidebar */
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSideBar({ ...sidebar, [anchor]: open });
  };

  const sidebarContent = (anchor) => (
    <Box
    //   role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Add your drawer content here */}
      <h1>Settings</h1>
      <Divider></Divider>
      <h3>Font Style</h3>
      <p>Font Style</p>
      <select 
      id="font-style" 
      name="font-style" 
      value={selectedFont}
      onChange={handleFontChange}>
        <option> Serif </option>
        <option> Arial </option>
        <option> Sans-Serif </option>                                  
        <option> Tahoma </option>
        <option> Verdana </option>
        <option> Lucida Sans Unicode </option>                               
      </select>

      <p>Font Color</p>
      <TwitterPicker
        color={selectedTextColor}
        onChange={(color) => {
          setSelectedTextColor(color.hex);
        }}
      ></TwitterPicker>
      <p>Font Size</p>
      <input
        type="number"
        name="text-size"
        id="text-size"
        value={selectedFontSize}
        onChange={(size) => {
          setSelectedFontSize(parseInt(size.target.value));
        }}
      />
      <Divider></Divider>
      <h3>Background Color</h3>
      <TwitterPicker
        color={selectedBackgroundColor}
        onChange={(color) => {
            setSelectedBackgroundColor(color.hex);
        }}
      ></TwitterPicker>
      <Divider></Divider>
      <h3>Window Opacity</h3>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={opacity}
        onChange={handleOpacityChange}
      />
    <Divider></Divider>
    <h3>Scroll Speed</h3>
    <input
        type="number"
        name="scroll-speed"
        id="scroll-speed"
        value={selectedScrollSpeed}
        onChange={(speed) => {
          setSelectedScrollSpeed(parseInt(speed.target.value));
        }}
      />
    <p>Selected speed: {selectedScrollSpeed}</p>
    </Box>
  );

  //  edit to add functionalities
  return (
    <div className="Teleprompter-Page" >
      {/* renders the header part of the screen <Header/> */}
      

      {/*  TeleprompterRibbon IS SIMILAR TO THE RIBBON OF GOOGLE FORMS*/}
      <TeleprompterRibbon>
        <SplitContent
          left={RibbonLeftContent} // insert the array of components
          right={RibbonRightContent} //insert the array of components
        />
        <Center>
          <PanelTab
            tabname = {TAB_NAMES.defaultval /* has the same value as TAB_NAMES.text */}
            onClick = {() => {setTab(TAB_NAMES.defaultval); /* SELECT THE "Text" tab */}}
          />
          <PanelTab
            tabname = {TAB_NAMES.teleprompter}
            onClick = {() => {setTab(TAB_NAMES.teleprompter); /* SELECT THE "Teleprompter" tab */ }}
          />
        </Center>
      </TeleprompterRibbon>

      {/* added divs to center the add-text section */}
      <div className="centered-div">
        <div className="add-text-section ">
          {
            //  SHOW THIS CONTENT IN THE BODY WHEN THE "Text" TAB IS SELECTED
            tab == TAB_NAMES.text ? (
              <TeleprompterPageContent>
                <p> Enter text: </p>
                <textarea
                  className="textInput"
                  value={text}
                  onChange={handleTextChange}
                />{" "}
                {/* todo: fixed text area */}
                <br />
                <br />
                {/* button to click to show the drawer */}
                <Button onClick={toggleDrawer("right", true)}>Settings</Button>
                {/* displays the drawer */}
                <Drawer
                  anchor="right"
                  open={sidebar["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {sidebarContent("right")}
                </Drawer>
              </TeleprompterPageContent>
            ) : null
          }
        </div>
        {
          //  SHOW THIS CONTENT IN THE BODY WHEN THE "Teleprompter" TAB IS SELECTED
          tab == TAB_NAMES.teleprompter ? (
            <TeleprompterPageContent>
              Current tab: "{tab}"
            </TeleprompterPageContent>
          ) : null
        }
      </div>
    </div>
  );
}

export default Teleprompter;

/* REFERENCES
- Textarea: https://react.dev/reference/react-dom/components/textarea
- Drawer/Sidebar: https://mui.com/material-ui/react-drawer/

*/
