import './style.css'
import { Button } from "react-bootstrap"


import {Card} from "../../components/card/"



function Home() {

  

  return (

    <div>
      <h1 className="title">Hello world</h1>

      <div className="container2">
        <input id='a' type="text" placeholder="Digite seu nome..." />
        <Button variant="primary">Primary</Button>
        
      </div>

      <Card name ="Igor" time="10:55:25"/>
      <Card name ="João" time="11:55:25"/>

    </div>
  )
}

export default Home
