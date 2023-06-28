import { useNavigate, useLocation } from "react-router";
// import "../assets/stylesheets/teleprompter.css";


export default function TeleprompterScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;


    return (
        <>
            <p>Teleprompter Screen</p>
            <button onClick={() => navigate(-1)}>Back</button>
            <pre style={{ color: state.color, fontSize: state.fontsize}}>{state.script}</pre>
            <button>start</button>
            <button>pause</button>
            <button>stop</button>
        </>
    );
}