import {useNavigate} from "react-router-dom";

export default function ToDoFrontend(){

    const navigateTo = useNavigate()


    return <div> TestPage
        <button onClick={() => navigateTo("/test")}>Start</button>

    </div>
}