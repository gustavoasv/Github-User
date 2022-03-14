import { Routes, Route } from "react-router-dom";
import { Followers } from "./pages/Followers";
import { Home } from "./pages/Home";
import { Repositories } from "./pages/Repositories";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/repositories" element={<Repositories />}></Route>
      <Route path="/followers" element={<Followers></Followers>}></Route>
    </Routes>
  );
};
