import { Routes, Route } from "react-router-dom"
import './App.css'
import TestTest from "./TestTest";
import FamousPageThree from "./FamousPageThree";
import PageFour from "./PageFour";
import ToDoFrontend from "./ToDoFrontend";
import MainTodo from "./Todo/MainTodo.tsx";


function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={ <ToDoFrontend/> } />
                <Route path="/test" element={<TestTest/>} />
                <Route path="/pagethree" element={<FamousPageThree/>} />
                <Route path="/pagefour" element={<PageFour/>} />
                <Route path="/todo" element={<MainTodo />} />
            </Routes>
        </>
    )
}

export default App
