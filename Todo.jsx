import { useState } from "react";

function Todo(){
    const [tasks,setTask]=useState([])
    const [text,setText]=useState("")
    const addTask=()=>{
        setTask([...tasks , {name:text, completed: false}])
        setText("")
    }
    const deleteTask=(index)=>{
        setTask(tasks.filter((_,i)=> i !== index))
    }
    return(
        <>

            <h2>ToDo List</h2>
            <input value={text}
            onChange={(e)=>setText(e.target.value)} 
            placeholder="Enter Task"/>
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task,index)=>(
                    <li key={index}>
                        <input type="checkbox" 
                        checked={tasks.completed}/>
                        <span>{task.name}</span>
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>


        </>
    )
}

export default Todo;
