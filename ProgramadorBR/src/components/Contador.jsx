import React ,{useEffect, useState} from "react"

function Contador(props) {

    const [count,SetCount] = useState(props.count)

 

    useEffect(()=>{


        async function teste(){
            const valor = await JSON.parse(localStorage.getItem("count"))
            

            if(valor){
                
                SetCount(valor)
            }

        }

        teste()

        return () =>{
            console.log("Não tem mais")
        }
     
      
        
    },[])

    useEffect(()=>{
        document.title = count
        localStorage.setItem("count",JSON.stringify(count))
      
    },[count])

    function upCount(){
        SetCount(count+ 1)
    }

    

    return (
        <>
            <div className="Contador">
                <h1>Contador</h1>
                <p>{count}</p>
                <button onClick={upCount}>Click</button>
            </div>
        </>
    )
}


export default Contador