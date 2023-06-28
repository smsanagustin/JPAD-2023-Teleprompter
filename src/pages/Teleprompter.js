
import {
  TAB_NAMES,
  MODAL,
  MODES,
  FONT_SIZE_LIMITS,
  SCROLL_SPEED_LIMITS,
  FONTS,
  COLORS,
  AI_REWRITE_OPTIONS,
} from "../model/values";


import AppIconText from "../components/AppIconText";
import Center from "../components/Center";
import TrainTabs from "../components/TrainTabs";
import SplitContent from "../components/SplitContent";
import IconTextButton from "../components/IconTextButton";
import Modal from '../components/Modal';
import DocPage from "../components/DocPage";
import TeleprompterPageContent from "../components/TeleprompterPageContent.js";
import TeleprompterRibbon from "../components/TeleprompterRibbon";



import React, { useState } from "react";
import { Button, Drawer, Divider, Box } from "@mui/material";
import { TwitterPicker } from "react-color";
import { Twitter } from "@mui/icons-material";
import ImageTextCard from "../components/ImageTextCard";
import { useNavigate, useLocation } from "react-router-dom";



function Teleprompter() {
  //  Add states as necessary **********************************************************************************

  //  ******************** [ STRUCTURAL STATES ] ********************
  const [tab, setTab] = useState(TAB_NAMES.defaultval);
  const [sidebar, setSideBar] = useState({ right: false });
  const [modal, setModal] = useState(MODAL.hidden);
 

  //  ******************** [ DATA STATES ] ********************
  const [text, setText] = useState("");
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

  const navigate = useNavigate();

  const defaultFontColors = [
    "#000000", // Black
    "#FFFFFF", // White
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
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

  const resetSettings = () => {
    // setSelectedFont();
    setSelectedTextColor("#000000");
    setSelectedFontSize(12);
    setSelectedBackgroundColor("#FFFFFF");
  }

  const sidebarContent = (anchor) => (
    <Box
    class="drawer-style"
    //   role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Add your drawer content here */}
      <h1 class="settings-text">Settings</h1>
      <Divider></Divider>
      <h3>Text Style</h3>
      <p class="subtext">Font</p>
      <select 
      className="selector-box"
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

      <p class="subtext">Font Color</p>
      <TwitterPicker
        color={selectedTextColor}
        colors={defaultFontColors}
        styles={{
            default: {
              swatch: {
                border: '1px solid #E6E6FA',
                borderRadius: '4px',
              },
            },
            transparent: {
              swatch: {
                border: '1px solid #E6E6FA',
                borderRadius: '4px',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5)',
              },
            },
          }}
        onChange={(color) => {
          setSelectedTextColor(color.hex);
        }}
      ></TwitterPicker>
      <p class="subtext">Font Size</p>
      <input
        className="input-box"
        type="number"
        name="text-size"
        id="text-size"
        value={selectedFontSize}
        onChange={(size) => {
          setSelectedFontSize(parseInt(size.target.value));
        }}
      /><br></br><br></br>
      <Divider></Divider>
      <h3>Background Color</h3>
      <TwitterPicker
        color={selectedBackgroundColor}
        colors={defaultFontColors}
        styles={{
            default: {
              swatch: {
                border: '1px solid #E6E6FA',
                borderRadius: '4px',
              },
            },
            transparent: {
              swatch: {
                border: '1px solid #E6E6FA',
                borderRadius: '4px',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5)',
              },
            },
          }}
        onChange={(color) => {
            setSelectedBackgroundColor(color.hex);
        }}
      ></TwitterPicker>
      <br></br><br></br>
      <Divider></Divider>
      <h3>Window Opacity</h3>
      {/* opacity scroller */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={opacity}
        onChange={handleOpacityChange}
      />
      <br></br><br></br>
      {/* value */}
      <div>
        Value: {opacity}
      </div>
      <br></br>
    <Divider></Divider>
    <h3>Scroll Speed</h3>
    <input
        className="input-box"
        type="number"
        name="scroll-speed"
        id="scroll-speed"
        value={selectedScrollSpeed}
        onChange={(speed) => {
          setSelectedScrollSpeed(parseInt(speed.target.value));
        }}
      />
    <p>Selected speed: {selectedScrollSpeed}</p>
    <button onClick={resetSettings}>Reset</button>
    </Box>
  );




  //  edit to add functionalities
  return (
    <div className="Teleprompter-Page" >
      {/* renders the header part of the screen <Header/> */}
      

      {/*  TeleprompterRibbon IS SIMILAR TO THE RIBBON OF GOOGLE FORMS*/}
      <TeleprompterRibbon>
        <SplitContent
          left={[<AppIconText/>]} // insert the array of components
          right={[
            <IconTextButton icon='magic_button' onClick = {() => {setModal(MODAL.writeWithAi)}} className = "margin-right-1 highlight-2 hover-highlight-2">Rewrite with AI</IconTextButton>,
            <IconTextButton icon='save' onClick = {() => {}}></IconTextButton>,
            <IconTextButton icon='palette' onClick = {toggleDrawer("right", true)}></IconTextButton>,
            <IconTextButton icon='slideshow' onClick = {() => {navigate("/teleprompter-screen", {state: {script:text, font: selectedFont, fontsize: selectedFontSize, color: selectedTextColor, bg: selectedBackgroundColor, speed: selectedScrollSpeed}})}}></IconTextButton>
          ]} //insert the array of components
        />
        <Center>
          <TrainTabs tabs = {[
            {tabname: TAB_NAMES.defaultval, /* has the same value as TAB_NAMES.write */
            onClick: () => {setTab(TAB_NAMES.defaultval); /* SELECT THE "Write" tab */}, 
            isSelected: TAB_NAMES.defaultval == tab,
          },

            {tabname: TAB_NAMES.teleprompter,
            onClick: () => {setTab(TAB_NAMES.teleprompter); /* SELECT THE "Teleprompter" tab */ },
            isSelected: TAB_NAMES.teleprompter == tab,
          },
          ]}/>
        </Center>
      </TeleprompterRibbon>

      {/* added divs to center the add-text section */}


          {
            //  SHOW THIS CONTENT IN THE BODY WHEN THE "Write" TAB IS SELECTED
            tab == TAB_NAMES.write ? (
              <TeleprompterPageContent>
                <DocPage value={text} onChange={handleTextChange} placeholder="Write your script">

                </DocPage>

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

        {
          //  SHOW THIS CONTENT IN THE BODY WHEN THE "Teleprompter" TAB IS SELECTED
          tab == TAB_NAMES.teleprompter ? (
            
            <TeleprompterPageContent>
              <pre style={{fontFamily: selectedFont, fontSize: selectedFontSize, color: selectedTextColor, backgroundColor: selectedBackgroundColor, whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',}}>{text}</pre>

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

        {
          modal == MODAL.writeWithAi
            ? <Modal title={'Let AI rewrite your text'} onClose={() => {setModal(MODAL.hidden)}}>
                {
                  Object.entries(AI_REWRITE_OPTIONS).map(([key, option]) => (
                    <ImageTextCard
                      image = {option.title}
                      title = {option.image}
                      description = {option.description}
                    />
                  ))
                }
              </Modal>
            : null
        }

    </div>
  );
}

export default Teleprompter;

/* REFERENCES
- Textarea: https://react.dev/reference/react-dom/components/textarea
- Drawer/Sidebar: https://mui.com/material-ui/react-drawer/

*/
