import * as C from './style'
import { Children, ReactNode } from 'react'

type PropsC = {
    children: ReactNode;
    dataPhoto?: string;
    dataName?: string;
}

export const Theme= ({ children, dataPhoto, dataName}: PropsC) => {
  return (
    <C.MainCard>
    <C.UserBanner>
      <C.UserAvatar>
        <C.Avatar>
          <img src={dataPhoto}></img>
        </C.Avatar>
        <C.UserName>@{dataName}</C.UserName>
      </C.UserAvatar>
    </C.UserBanner>
    {children}
  </C.MainCard>
  )
}