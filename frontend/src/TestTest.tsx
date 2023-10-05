import {useNavigate} from "react-router-dom";

export default function TestTest(){

    const navigateTo = useNavigate()


    return <div> TestPage
        <button onClick={() => navigateTo("/pagethree")}>Continue</button>

    </div>

}