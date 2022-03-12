import { Link } from "react-router-dom";
import * as C from "./style";

export const ButtonTheme = () => {
  return (
    <C.MainButton>
      <C.Button>respositorios</C.Button>
      <Link to="/repositories">
        <C.Button>Followers</C.Button>
      </Link>
    </C.MainButton>
  );
};
