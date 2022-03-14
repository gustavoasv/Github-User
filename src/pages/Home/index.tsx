import * as C from "./style";
import { useState, useContext, useEffect } from "react";
import api from "../../service/api";
import { Theme } from "../../components/Theme";
import { Content } from "../../contexts/userContext";
import { ButtonLink } from "../../components/ButtonLink";
import { Link } from "react-router-dom";
import { Repositories } from "../Repositories";

export type Api = {
  avatar_url: string;
  login: string;
  html_url: string;
  bio: string;
};

export const Home = () => {
  const [inputValue, setInput] = useState("");
  const [resRepo, setresRepo] = useState('');
  const [resFollowers, setResFollowers] = useState('')
  const [loading, setLoading] = useState(true);
  const context = useContext(Content);
  
  const getUser = async () => {
    setLoading(false);
    try {
      const get = await api.get(`users/${inputValue}`);
      const getRepos = await api.get(`users/${inputValue}/repos`)
      const getFollowers = await api.get(`users/${inputValue}/followers`)
      context.setUsersApi(get.data);
      setresRepo(getRepos.data)
      setResFollowers(getFollowers.data)

      console.log(resRepo.length)
    } catch (e) {
      if (e) {
        setInput("");
        alert("Usúario não encontrado! digite novamente");
      }
    }
    setLoading(true);
  };
  const ctx = useContext(Content);
  return (
    <C.Main>
      <h1>Github Users</h1>
      <p>Search Github users</p>
      <C.InputArea>
        <C.Input
          placeholder="Digite o nome de Usúario"
          onChange={(e) => setInput(e.target.value)}
        ></C.Input>
        <C.Button onClick={getUser}>Buscar</C.Button>
      </C.InputArea>
      {!loading && <C.Loader></C.Loader>}
      {context.users.login && (
        <>
          <Theme>
            <C.Bio>
              <p>{ctx.users.bio}</p>
            </C.Bio>
            <C.Buttons>
              <C.ButtonsArea>
                <Link to="/followers">
                  <C.ButtonCount>
                    <p>{resFollowers.length}</p>
                  </C.ButtonCount>
                  <C.ButtonContent>
                    <p>Seguidores</p>
                  </C.ButtonContent>
                </Link>
              </C.ButtonsArea>
              <C.ButtonsArea>
                <Link to="/repositories">
                  <C.ButtonContent>
                    <p>Respositorios</p>
                  </C.ButtonContent>
                  <C.ButtonCount>
                    <p>{resRepo.length}</p>
                  </C.ButtonCount>
                </Link>
                {/* </C.ButtonCount> */}
              </C.ButtonsArea>
            </C.Buttons>
          </Theme>
          <ButtonLink
            html_url={ctx.users.html_url}
            text={"Ir para o peril"}
          ></ButtonLink>
        </>
      )}
    </C.Main>
  );
};
