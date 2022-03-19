import { Theme } from "../../components/Theme";
import * as C from "./styled";
import { useEffect, useState, useContext } from "react";
import { Content } from "../../contexts/userContext";
import api from "../../service/api";
import { Card } from "../../components/Card";

type reposType = {
  full_name: string;
  description: string;
};

export const Repositories = () => {
  const context = useContext(Content);
  const login = context.users.login;

  const [repositoriesData, setRepositoriesData] = useState<Array<reposType>>(
    []
  );

  useEffect(() => {
    const getPageRepos = async () => {
      const GetRepos = await api.get(`/users/${login}/repos`);
      const reposData = GetRepos.data;
      setRepositoriesData(reposData);
      console.log(reposData);
    };
    getPageRepos();
  }, []);

  return (
    <C.RepoMain>
      <Theme>
        <Card>
          {repositoriesData.map((item, index) => {
            return (
              <C.div>
                <C.CardContent>
                  <h4>{item.full_name}</h4>
                  <div>{item.description}</div>
                </C.CardContent>
              </C.div>
            );
          })}
        </Card>
      </Theme>
    </C.RepoMain>
  );
};
