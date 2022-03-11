import * as C from "./style";
import { Children, ReactNode } from "react";

type Props = {
   Children: ReactNode
}

export const Repos = ({ Children }: Props) => {
  return (
     <div>
      <C.Banner />
      <C.ProfileArea>
        <C.Profle>..</C.Profle>
        <C.UserProfile>
          <C.User>@Perfil</C.User>
        </C.UserProfile>
        <C.CardMain>
          {Children}
        </C.CardMain>
      </C.ProfileArea>
    </div>
  );
};
