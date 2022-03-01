import { Routes,  Route } from "react-router-dom";
import { Repos } from "./components/CardTheme";

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/repositories" element={<Repos></Repos>}></Route>
        </Routes>
    )
}