import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Home";
import { Repositories } from "./pages/Repositories";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Header></Header>}></Route>
      <Route
        path="/repositories"
        element={<Repositories></Repositories>}
      ></Route>
    </Routes>
  );
};
