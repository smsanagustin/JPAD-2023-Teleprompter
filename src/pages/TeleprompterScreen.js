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
            <pre style={{ color: state.color, fontSize: state.fontsize, whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'}}>{state.script}</pre>
            <button>start</button>
            <button>pause</button>
            <button>stop</button>
        </div>
    );
}