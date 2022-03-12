import * as C from './style'

type Props = {
  bioUser: string;
}

export const UserBio = (Props: Props) => {
  return(
     <C.Bio><p>{Props.bioUser}</p></C.Bio>
  )  
}