import {useState,useEffect} from 'react'
import {Title} from './AppStyle.js'

function App() {


  const [count,setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  useEffect(()=>{
    if(count > 10){
      console.log("Para cara pelo amor de Deus")
    }
  },[count])


  return (
    <>
      <Title>Contador simples <span>Texto menor</span></Title>
      
      <h3>{count}</h3>
   
      <button onClick={increment}>click para aumentar o contador</button>
    </>
  )
}

export default App
