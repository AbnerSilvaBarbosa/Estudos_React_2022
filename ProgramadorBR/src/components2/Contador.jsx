import React,{useState,useContext} from "react"
import {ContadorContexto} from "./ContadorContexto"


function Contador() {
    const [count, setCount] = useContext(ContadorContexto)
    return (
        <div>


            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

        </div>

    )
}

export default Contador

