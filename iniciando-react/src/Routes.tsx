import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import { Carrinho } from "./pages/Carrinho"
import { Catalogo } from "./pages/Catalogo"


export function AppRoutes() {
    return (
        <Router>
            <Routes>

                <Route path="/Catalogo" element ={<Catalogo />}> </Route>

                <Route path="/Carrinho" element ={<Carrinho/>}> </Route>
            </Routes>


        </Router>
    )
}