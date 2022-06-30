import React, {useContext} from 'react'
import { ContadorContexto } from "./ContadorContexto"

function Header() {
    const [count,setCount] = useContext(ContadorContexto)

    return (
        <>
            <h1>Contador</h1>
            <p>{count}</p>
        </>
    )
}

export default Header