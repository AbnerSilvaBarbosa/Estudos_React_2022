import "./App.css"
import Header from "./components/Header"
import Contador from "./components/Contador"
import { useEffect, useState } from "react"
import Tarefa from "./components/Tarefa"
import Input from "./components/Input"


function App() {


  
  const [card, setCard] = useState([])


  function doneTask(id){
    let updatedItems = card.map(card => {
      if(card.id === id){
        
        if(card.done === false){
          card.done = true
        }else{
          card.done = false
        }

        
      }

      return card
      
    })

    setCard(updatedItems)
    


  }
 
  function deleteTask(id) {
    let filter = card.filter(card => card.id != id)
    setCard(filter)
  }

  function setCardCalback(item){
    setCard([...card,item])
  }



  return (
    <>
      <Header name="Logo" links={["Sobre", "Comprar", "Contato", "Login", "Registrar"]} style={"navbar1"}></Header>

      <Input setCardCalback={setCardCalback}></Input>

      {card.map(tarefa => <Tarefa key={tarefa.id} tarefa={tarefa.name} delete={()=>{deleteTask(tarefa.id)}} done={()=>{doneTask(tarefa.id)}} card={tarefa.done}></Tarefa>)}

    </>

  )


  // const [show, SetShow] = useState(true)


  // let time = 0

  // useEffect(() => {
  //   const timer = setInterval(function () {
  //     time++
  //     if (time > 5) {
  //       clearInterval(timer)
  //       SetShow(false)

  //     }

  //   }, 1000)

  // }, [])




  // if (show) {
  //   return (
  //     <>
  //       <Header name="Logo" links={["Sobre", "Comprar", "Contato", "Login", "Registrar"]} style={"navbar1"}></Header>
  //       <Contador count={0}></Contador>
  //     </>

  //   )

  // } else {
  //   return (
  //     <>
  //       <Header name="Logo" links={["Sobre", "Comprar", "Contato", "Login", "Registrar"]} style={"navbar1"}></Header>
  //       <p>Esse foi seu recorde em 5 segundos: {JSON.parse(localStorage.getItem("count"))} clickes</p>
  //     </>
  //   )
  // }

}




export default App
