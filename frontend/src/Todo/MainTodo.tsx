import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import axios from "axios";

interface Todo {
    id: string;
    description: string;
    status: string;
}

function MainTodo() {
    const [todos  , setTodos] = useState<Todo[]>([]);
    const [text   , setText] = useState<string>("");

    const onTextChange = (event : ChangeEvent<HTMLInputElement>)  =>
    {
        setText(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        console.log("submit")

        const todo: Todo =
        {
            id: "X",
            description: text,
            status: "OPEN" // or "CLOSED" or whatever valid statuses you have
        };

        axios.post("/api/todo" , todo )
            .then(response =>
            {
                console.log("to saved")
                setText("")
                setTodos(prevTodos => [...prevTodos, response.data]);
            })
    }


    useEffect(() => {

        axios.get<Todo[]>('/api/todo')
            .then( (response) =>
            {
                console.log(response.data)
                setTodos(response.data);
            })
    }, []);

    return (
        <>
            <p> Hello World</p>
            <div>
                <ul>
                    {todos && todos.map( (todo) =>
                    (
                        <li key={todo.id}>
                            {todo.description} : {todo.status}
                        </li>
                    ))}
                </ul>
            </div>


            <div>
                <form onSubmit={handleSubmit}>
                    <input value={text} onChange={onTextChange} placeholder={"was willst du machen"}/>
                    <button> save </button>
                </form>
            </div>
        </>
    );
}

export default MainTodo;