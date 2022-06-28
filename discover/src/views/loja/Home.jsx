import './style.css'
import { Button } from "react-bootstrap"
import {useState} from "react"

import {Card} from "../../components/card/"



function Home() {

  //estado react
  //[ 1ª valor do estado "valor que eu quero utilizar")
  //  2ª função que atualiza o valor do estado
  // 3ª =...() seria o valor inicial do estado
  

  // [nomeclatura nomrmal , setnomeclatura ]
  const [name1,setName] = useState("")
  const [cardName, setCardName] = useState([])

  function testeState(){
    const value = {
      name:name1,
      time: new Date().toLocaleDateString("pt-br",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    }

    setCardName(preveState =>[...preveState,value])
  }

  return (

    <div>
      <h1 className="title">Hello world</h1>

      <div className="container2">
        <input 
        id='a' 
        type="text" 
        placeholder="Digite seu nome..."
        onChange={e => setName(e.target.value)}/>

        <Button 
        variant="primary"
        onClick={testeState}
        >Primary</Button>
        
      </div>

      {
        cardName.map(texto => <Card name ={texto.name} time={texto.time}/>)
      }
      

    </div>
  )
}

export default Home
