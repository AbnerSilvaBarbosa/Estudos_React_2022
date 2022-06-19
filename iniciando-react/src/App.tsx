import { useState } from "react"
import { Exemplo } from "./components/exemplo"

import "./App.css"
import { AppRoutes } from "./Routes"

function App() {

  //teste1 o valor mais recente da vairavel
  //teste2 repor ou substaituir o valor da vairavel teste1
  const [teste1, teste2] = useState<string[]>([
    "texto 1",
    "texto 2",
    "texto 3",
  ])



  function testeState(){
    let cont = 5
    teste2([...teste1,`texto ${cont}`])
    

  }

  return (

    <AppRoutes/>
    // <div>
    //   {teste1.map(a =>{
    //     return <Exemplo text={a}/>
    //   })}

    //   <button onClick={testeState} style={{
        
    //     backgroundColor:"blue",
    //     border:"2px solid white",
    //     fontFamily:"revert",
    //     fontSize:"50px",
    //     padding:"10px",
        
        
        
    //     }}>Adicionar texto</button>

    // </div>




  )

}

export default App
