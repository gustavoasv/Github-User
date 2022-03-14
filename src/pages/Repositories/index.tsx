import { Theme } from "../../components/Theme";
import * as C from "./styled";
import { useEffect, useState, useContext } from "react";
import { Content } from "../../contexts/userContext";
import { Api } from "../Home";
import api from "../../service/api";

export const Repositories = () => {
  const [users, setUsers] = useState<Api>();

  useEffect(() => {
    const getPageRepos = async () => {
    const repos = await api.get(`users/respos`)
      setUsers(repos.data)
    };
    getPageRepos();
  }, []);

  return (
    <C.RepoMain>
      <Theme>
       
      </Theme>
    </C.RepoMain>
  );
};
