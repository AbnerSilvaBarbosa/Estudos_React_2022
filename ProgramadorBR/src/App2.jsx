import Contador from "./components2/Contador"
import Header from "./components2/Header"
import { ContadorContextoProvider } from "./components2/ContadorContexto"

import "./App2.css"

function App2() {
    return (
        <div className="centroDiv">
            <ContadorContextoProvider>
                <Header></Header>
                <Contador></Contador>
            </ContadorContextoProvider>
        </div>
    )
}

export default App2