import { CardProfile } from "../CardProfile";
import { Repos } from "../CardTheme";
import { CardArea } from "../CardTheme/style";
import * as C from "./style";

export const Header = () => {
  return (
    <div>
      <C.Head>
        <C.Title>Github users</C.Title>
        <C.SubTitle>search for Github users</C.SubTitle>
        <C.InputArea>
          <C.Input placeholder="Github Username"></C.Input>
          <C.Button>Search</C.Button>
        </C.InputArea>
        <CardProfile/>
      </C.Head>
    </div>
  );
};
