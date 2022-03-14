import * as C from "./style";
import Open from '../../assets/open-in-new.png'
type DataUrl = {
  html_url?: string;
  text: string;
}

export const ButtonLink = ({ text, html_url}: DataUrl) => {
  return (
    <C.ButtonArea>
      <C.ButtonUser>
        <img src={Open}></img>
        <a href={html_url}>{text}</a>
      </C.ButtonUser>
    </C.ButtonArea>
  );
};
