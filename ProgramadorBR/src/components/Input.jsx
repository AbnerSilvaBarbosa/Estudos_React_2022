import { useState } from 'react'

function Input(props) {

    const [task, setTask] = useState("")

    function teste() {

        if (task) {
            const objeto = {
                name: task,
                id: Math.random(),
                done:false
            }
            //   setCard(prev => [...prev, objeto])
            props.setCardCalback(objeto)
            setTask("")
        }
    }

    return (
        <div className="inputPosition">
            <input
                type="text"
                placeholder="Digite as suas tarefas"
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />
            <button onClick={teste}>add</button>

            <p>{task}</p>

        </div>
    )
}


export default Input