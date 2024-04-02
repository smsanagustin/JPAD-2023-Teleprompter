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
import useAI from "../model/ai";

import AppIconText from "../components/AppIconText";
import Center from "../components/Center";
import DocPage from "../components/DocPage";
import Grid from "../components/Grid";
import IconTextButton from "../components/IconTextButton";
import ImageTextCard from "../components/ImageTextCard";
import Modal from "../components/Modal";
import SplitContent from "../components/SplitContent";
import TextOverlay from "../components/TextOverlay";
import TrainTabs from "../components/TrainTabs";


import TeleprompterPageContent from "../components/TeleprompterPageContent.js";
import TeleprompterRibbon from "../components/TeleprompterRibbon";
import BackIcon from "../assets/images/BackIcon.png";
import PlayIcon from "../assets/images/PlayIcon.png";
import PauseIcon from "../assets/images/PauseIcon.png";
import StopIcon from "../assets/images/StopIcon.png";
import OpenEyeIcon from "../assets/images/OpenEye.png";
import CloseEyeIcon from "../assets/images/ClosedEye.png";



import React, { useState, useRef, useEffect } from "react";
import { Button, Drawer, Divider, Box } from "@mui/material";
import { TwitterPicker } from "react-color";
import { Close, Twitter } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/stylesheets/fullscreen-page.css";
import { right } from "@popperjs/core";

function Teleprompter() {
  //  Add states as necessary **********************************************************************************
  //  ******************** [ STRUCTURAL STATES ] ********************
  const [tab, setTab] = useState(TAB_NAMES.defaultval);
  const [sidebar, setSideBar] = useState({ right: false });
  const [modal, setModal] = useState(MODAL.hidden);

  //  ******************** [ DATA STATES ] ********************
  const [text, setText] = useState("");
  const [response, rewrite] = useAI();
  const [rewriteText, setRewriteText] = useState("");

  const [selectedMode, setSelectedMode] = useState(MODES.defaultval);
  const [position, setPosition] = useState(0);

  const [scrollSpeed, setScrollSpeed] = useState(
    SCROLL_SPEED_LIMITS.defaultval
  );
  const [selectedFont, setSelectedFont] = useState("");
  //   const [selectedTextColor, setSelectedTextColor] = useState(COLORS.defaultval);
  const [selectedTextColor, setSelectedTextColor] = useState("#000000");
  const [selectedFontSize, setSelectedFontSize] = useState(120);
  const [selectedScrollSpeed, setSelectedScrollSpeed] = useState(1);
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("#F5F5F5");
  const [opacity, setOpacity] = useState(1);

  const [showTeleprompter, setShowTeleprompter] = useState(false);

  const [toggleStartOrPause, setToggleStartOrPause] = useState(true);
  const [toggleVisiblity, setVisibility] = useState(true);

  // used for scrolling
  const [runner, setRunner] = useState(null);
  const telepromptContent = useRef(null); // initialize ref

  const hidden = () => {
    setVisibility(false);
    const icons = document.getElementById('icon-background');
    icons.style.visibility = 'hidden';
  }

  const visible = () => {
    setVisibility(true);
    const icons = document.getElementById('icon-background');
    icons.style.visibility = 'visible';
  }



  useEffect(() => {
    console.log(response);
    if(response.finish_reason == 'stop'){
      console.log('response.result: ',response.result);
      setText(text + '\n\n\n\n----- [END OF THE ORIGINAL, START OF THE REVISION] -----\n\n\n' + response.result);
      setRewriteText('');
    }
  }, [response]);
  
  const handleCreateRewrite = async (input, instruction) => {
    setRewriteText('');
    console.log({input: input, instruction: instruction});
    await rewrite(input, instruction);
  };

  // Return the number of words
  function countWords(str) {
    let words = str.split(/\s+/);
    words = words.filter(word => word.length > 0);
    return words.length;
  }

  const handleCloseModal = () => {
    setModal(MODAL.hidden);
  }

  const handlePlay = () => {
    setToggleStartOrPause(false);
    // const container = document.querySelector(".fullscreen-page");
    // if (container && endOfScriptRef.current) {
    //   endOfScriptRef.current.scrollIntoView({ behavior: "smooth" });
    // }

    clearInterval(runner);
    setRunner(
      setInterval(() => {
        if (telepromptContent.current != null) {
          telepromptContent.current.scrollTop += selectedScrollSpeed;
        }
      }, 10)
    )
  };

  const handlePause = () => {
    setToggleStartOrPause(true);
    clearInterval(runner);
  }

  const handleStop = () => {
    setToggleStartOrPause(true);
    clearInterval(runner);
    if (telepromptContent.current != null) {
      telepromptContent.current.scrollTop = 0;
    }
  };

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
    setSelectedFont("Serif");
    setSelectedTextColor("#000000");
    setSelectedFontSize(70);
    setSelectedBackgroundColor("#F5F5F5");
  };

  const toggleTeleprompter = () => {
    setShowTeleprompter(!showTeleprompter);
  };
  

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
      onChange={(font) => {
        setSelectedFont(font.target.value)
      }}>
        <option value = "Serif"> Serif </option>
        <option value = "Arial"> Arial </option>
        <option value = "Sans-Serif"> Sans-Serif </option>                                  
        <option value = "Tahoma"> Tahoma </option>
        <option value = "Verdana"> Verdana </option>
        <option value = "Times New Roman"> Times New Roman </option>
        <option value = "Lucida Sans Unicode"> Lucida Sans Unicode </option>                               
      </select>

      <p class="subtext">Font Color</p>
      <TwitterPicker
        color={selectedTextColor}
        colors={defaultFontColors}
        styles={{
          default: {
            swatch: {
              border: "1px solid whitesmoke",
              borderRadius: "4px",
            },
          },
          transparent: {
            swatch: {
              border: "1px solid whitesmoke",
              borderRadius: "4px",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)",
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
      />
      <br></br>
      <br></br>
      <Divider></Divider>
      <h3>Background Color</h3>
      <TwitterPicker
        color={selectedBackgroundColor}
        colors={defaultFontColors}
        styles={{
          default: {
            swatch: {
              border: "1px solid #E6E6FA",
              borderRadius: "4px",
            },
          },
          transparent: {
            swatch: {
              border: "1px solid #E6E6FA",
              borderRadius: "4px",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)",
            },
          },
        }}
        onChange={(color) => {
          setSelectedBackgroundColor(color.hex);
        }}
      ></TwitterPicker>
      <br></br>
      <br></br>
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
      <br></br>
      <br></br>
      {/* value */}
      <div>Value: {opacity}</div>
      <br></br>
      <Divider></Divider>
      <h3>Scroll Speed</h3>
      <input
        className="input-box"
        type="number"
        max={10}
        name="scroll-speed"
        id="scroll-speed"
        value={selectedScrollSpeed}
        onChange={(speed) => {
          setSelectedScrollSpeed(parseInt(speed.target.value));
        }}
      />
      <p>Selected speed: {selectedScrollSpeed}</p>
      <Divider></Divider>
      <br></br>
      <button className="reset-button" onClick={resetSettings}>Reset Settings</button>
    </Box>
  );

  const endOfScriptRef = useRef(null);



  //  edit to add functionalities
  return (
    <div className="Teleprompter-Page">
      {/* renders the header part of the screen <Header/> */}

      {/*  TeleprompterRibbon IS SIMILAR TO THE RIBBON OF GOOGLE FORMS*/}
      <TeleprompterRibbon>
        <SplitContent
          left={[<AppIconText />]} // insert the array of components
          right={[
            // <IconTextButton
            //   icon="magic_button"
            //   onClick={() => {
            //     setModal(MODAL.writeWithAi);
            //   }}
            //   className="margin-right-1 highlight-2 hover-highlight-2"
            // >
            //   Rewrite with AI
            // </IconTextButton>,

            // <IconTextButton icon="save" onClick={() => {}}></IconTextButton>,
            
            <IconTextButton
              icon="palette"
              onClick={toggleDrawer("right", true)}
            ></IconTextButton>,
            <IconTextButton
              icon="slideshow"
              onClick={toggleTeleprompter}
            ></IconTextButton>,
          ]} //insert the array of components
        />
        <Center>
          <TrainTabs
            tabs={[
              {
                tabname:
                  TAB_NAMES.defaultval /* has the same value as TAB_NAMES.write */,
                onClick: () => {
                  setTab(TAB_NAMES.defaultval); /* SELECT THE "Write" tab */
                },
                isSelected: TAB_NAMES.defaultval == tab,
              },

              {
                tabname: TAB_NAMES.teleprompter,
                onClick: () => {
                  setTab(
                    TAB_NAMES.teleprompter
                  ); /* SELECT THE "Teleprompter" tab */
                },
                isSelected: TAB_NAMES.teleprompter == tab,
              },
            ]}
          />
        </Center>
      </TeleprompterRibbon>

      {/* added divs to center the add-text section */}

      {
        //  SHOW THIS CONTENT IN THE BODY WHEN THE "Write" TAB IS SELECTED
        tab == TAB_NAMES.write ? (
          <TeleprompterPageContent>
            <DocPage
              value={text}
              onChange={handleTextChange}
              placeholder="Write your script"
            ></DocPage>

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
          <TeleprompterPageContent bg={selectedBackgroundColor}>
            <pre
              style={{
                fontFamily: selectedFont,
                fontSize: selectedFontSize,
                color: selectedTextColor,
                backgroundColor: selectedBackgroundColor,
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              {text}
            </pre>

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

      {modal == MODAL.writeWithAi ? (
        <Modal
          title={"Let AI rewrite your text"}
          onClose={handleCloseModal}
        >
          <Grid>
            {Object.entries(AI_REWRITE_OPTIONS).map(([key, option]) => (
              <ImageTextCard
                image = {option.image}
                title = {option.title}
              >
                <TextOverlay
                  title = {option.description}
                  onClick = {() => {handleCreateRewrite(text, option.prompt)}}
                />
              </ImageTextCard>
            ))}
          </Grid>
        </Modal>
      ) : null}


      {/* {showTeleprompter  ? (
        <div className="fullscreen-page" style={{ backgroundColor: "#FFFFFF" }}>
          <pre
            style={{
              fontFamily: selectedFont,
              fontSize: selectedFontSize,
              color: selectedTextColor,
              backgroundColor: selectedBackgroundColor,
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {text}
          </pre>
          <button onClick={() => {setShowTeleprompter(false)}}>Back</button>
        </div>
      ) : null} */}

      {showTeleprompter && (
        <div
          className="fullscreen-page"
          style={{ backgroundColor: selectedBackgroundColor }}
        >
          {/* Slideshow content */}
          {/* Add your slideshow content here */}
          <div className="container" style={{ position: "relative" }}>
            <img className="icon-button1" onClick={toggleTeleprompter} src={BackIcon}></img>
            {toggleVisiblity ? <img className="icon-button1" onClick={hidden} src={OpenEyeIcon}></img>: <img className="icon-button1" onClick={visible} src={CloseEyeIcon}></img> }
          </div>
          <script src="js/scrollmagic/uncompressed/ScrollMagic.js"></script>

          {/* <marquee direction= "up"> Temporary placeholder for scrolling */}
          <div 
            ref={telepromptContent}
            style={{
              fontFamily: selectedFont,
              fontSize: selectedFontSize,
              color: selectedTextColor,
              backgroundColor: selectedBackgroundColor,
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              maxHeight: window.innerHeight,
              overflowY: "scroll"
            }}
            className="text-container">
            {text}
          </div>
          {/* </marquee> */}
          
          {/* <div ref={telepromptContent} /> */}

          <div className="button-container">
        <div className="icon-button-container" style={{backgroundColor: selectedBackgroundColor}}>
            <div class="icon-background" id="icon-background">
          {toggleStartOrPause ? <img className="icon-button" onClick={handlePlay} src={PlayIcon}></img>: <img className="icon-button" onClick={handlePause} src={PauseIcon}></img> }
          <img className="icon-button" onClick={handleStop} src={StopIcon}></img>
            </div>

        </div>
      </div>
        </div>
      )
      }
    </div>

    
  );
}

export default Teleprompter;

/* REFERENCES
- Textarea: https://react.dev/reference/react-dom/components/textarea
- Drawer/Sidebar: https://mui.com/material-ui/react-drawer/
- Scronll to top: https://www.youtube.com/watch?v=pKbNCWb6USQ
- Scroll to bottom: https://www.youtube.com/watch?v=27jInSXXbqk

*/
