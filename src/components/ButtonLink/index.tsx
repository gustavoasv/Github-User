import * as C from "./style";
import open from "../../assets/open-in-new.png";

type DataUrl = {
  html_url?: string;
  text: string;
}

export const Button = ({ text, html_url }: DataUrl) => {
  return (
    <C.ButtonArea>
      <C.ButtonUser>
        <img src={open}></img>
        <a href={html_url}>{text}</a>
      </C.ButtonUser>
    </C.ButtonArea>
  );
};
