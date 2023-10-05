import {useNavigate} from "react-router-dom";

export default function FamousPageThree(){

    const navigateTo = useNavigate()


    return <div> FamousPageThree
        <button onClick={() => navigateTo("/pagefour")}>Page3isAwesome</button>

    </div>
}