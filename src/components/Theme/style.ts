import styled from "styled-components";

export const MainCard = styled.div`
  max-width: 520px;
  height: 343px;
  margin: 20px auto;
  border-radius: 9px;
  background-color: #f9f9f9;
  border: 1px solid #e9e9e9;
`;
export const UserBanner = styled.div`
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  height: 80px;
  background-color: #28cba4;
`;
export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 280px;
  height: 70px;
  top: 45px;
  margin: 0 0 0 29px;
`;

export const Avatar = styled.div`
  width: 77px;
  height: 77px;
  background-color: #fff;
  border-radius: 9px;
  border: 5px solid #fff;

  img {
    width: 77px;
    height: 77px;
    border-radius: 10px;
  }
`;

export const UserName = styled.div`
  width: 140px;
  height: auto;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  margin: 0 0 0 10px;
  background-color: #fff;
  border-radius: 9px;
`;
