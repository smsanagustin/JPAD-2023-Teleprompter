import { useNavigate, useLocation } from "react-router";


export default function TeleprompterScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const text = location.state;
    return(
        <>
        <p>Teleprompter Screen</p>
        <button onClick={() => navigate(-1)}>Back</button>
        <pre>{text}</pre>
        </>
    )
}