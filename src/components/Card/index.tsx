import * as C from "./style"
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Card = ( { children }: Props) => {
    return (
      
      <C.CardArea>
        {children}
      </C.CardArea>
    )
}