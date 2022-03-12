import { Button } from "../../components/ButtonLink";
import { Theme } from "../../components/Theme";
import * as C from "./styled";
import { useEffect, useState } from "react";

import { Api } from "../Home";

export const Repositories = () => {
  const [users, setUsers] = useState<Api>();

  useEffect(() => {
    const getPageRepos = async () => {
      const getLocalSave: any = localStorage.getItem("user");
      const objeto = JSON.parse(getLocalSave)
      setUsers(objeto)
    };
    getPageRepos();
  }, []);

  return (
    <C.RepoMain>
      <Theme>
        <img src={users?.avatar_url}></img>
      </Theme>
      <Button text="I para o repositorio"></Button>
    </C.RepoMain>
  );
};
