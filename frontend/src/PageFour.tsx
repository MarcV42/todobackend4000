import {useNavigate} from "react-router-dom";

export default function PageFour(){

    const navigateTo = useNavigate()


    return <div> VierGewinnt!
        <button onClick={() => navigateTo("/")}>Page4isSuper</button>

    </div>
}