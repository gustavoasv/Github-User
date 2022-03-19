import * as C from "./style";
import { ReactNode, useContext } from "react";
import { Content } from "../../contexts/userContext";


type PropsC = {
  children: ReactNode;
}

export const Theme = ({ children }: PropsC) => {
  const ctx = useContext(Content);

  return (
    <C.MainCard>
      <C.UserBanner>
        <C.UserAvatar>
          <C.Avatar>
            <img src={ctx.users.avatar_url}></img>
          </C.Avatar>
          <C.UserName>@{ctx.users.login}</C.UserName>
        </C.UserAvatar>
      </C.UserBanner>
      {children}
    </C.MainCard>
  );
};
