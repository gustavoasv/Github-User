import { ReactNode } from "react";
import * as C from "./style";

type PropsCard = {
  children: ReactNode;
};

export const Card = ({ children }: PropsCard) => {
  return <C.CardArea>{children}</C.CardArea>;
};
