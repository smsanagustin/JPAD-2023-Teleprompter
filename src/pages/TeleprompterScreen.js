import { useNavigate, useLocation } from "react-router";
// import {pre} from "../assets/stylesheets/teleprompter.css";


export default function TeleprompterScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const rootStyle = {
        backgroundColor: state.bg,
      };


    return (
        <div style={rootStyle}>
            <p>Teleprompter Screen</p>
            <button onClick={() => navigate(-1)}>Back</button>
            <marquee direction= "up" id="teleprompter"><pre style={{fontFamily: state.fontFamily, color: state.color, background: state.bg, fontSize: state.fontsize,}}>{state.script}</pre>
            </marquee>
            <button>start</button>
            <button >pause</button>
            <button>stop</button>
        </div>
    );
}