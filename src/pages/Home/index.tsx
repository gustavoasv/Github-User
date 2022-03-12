import * as C from "./style";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { Theme } from "../../components/Theme";
import { Button } from "../../components/ButtonLink";
import { UserBio } from "../../components/UserBio";
import { ButtonTheme } from "../../components/UserBio/ButtonsTheme";
import { stringify } from "querystring";

export type Api = {
  avatar_url: string;
  login: string;
  html_url: string;
  bio: string;
};

export const Home = () => {
  const [user, setUser] = useState<Api>();
  const [inputValue, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const handleGetUser = async () => {
    if (!inputValue) {
      alert("Digite Algo");
      setLoading(true);
    }
    setLoading(false);
    try {
      const req = await api.get(`users/${inputValue}`);
      const res = await req.data; 
      setUser(res)
      console.log(res)
    setLoading(true);
    } catch (erro) {
      if (erro) {
        alert("Usúario não encontrado :(");
        setLoading(true);
      }
    }
  };

  // useEffect(() => {
  //   const setData = localStorage.setItem('users', user)  
  // }, [user])

  return (
    <C.Main>
      <h1>Github Users</h1>
      <p>Search Github users</p>
      <C.InputArea>
        <C.Input
          placeholder="Digite o nome de Usúario"
          onChange={(e) => setInput(e.target.value)}
        ></C.Input>
        <C.Button onClick={handleGetUser}>Buscar</C.Button>
      </C.InputArea>

      {!loading && <C.Loader></C.Loader>}

      {user && (
        <>
          <Theme dataPhoto={user.avatar_url} dataName={user?.login}>
            <UserBio bioUser={user.bio}></UserBio>
            <ButtonTheme></ButtonTheme>
          </Theme>
          <Button text="Ir para o perfil" html_url={user.html_url}></Button>
        </>
      )}
    </C.Main>
  );
};
function res(res: any): string {
  throw new Error("Function not implemented.");
}

