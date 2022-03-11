// import { CardProfile } from "../CardProfile";
import api from "../../service/api";
import { Card } from "../Card";
import { Repos } from "../HeaderInput/CardTheme";
import * as C from "./style";

export const Header = () => {
  const setApi = () => {
    const getApi = api.get("/repositories");
    const response = getApi.then((res) => res.data);
  };

  return (
    <div>
      <C.Main>
        <C.Head>
          <C.Title>Github users</C.Title>
          <C.SubTitle>search for Github users</C.SubTitle>
          <C.InputArea>
            <C.Input placeholder="Github Username"></C.Input>
            <C.Button onClick={setApi}>Search</C.Button>
          </C.InputArea>
        </C.Head>
          <C.Resume>
            <Repos Children={undefined}></Repos>
            <Card>
            <p>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </p>
            </Card>
          </C.Resume>
      </C.Main>
    </div>
  );
};
