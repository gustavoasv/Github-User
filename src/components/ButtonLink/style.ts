import styled from "styled-components";

export const ButtonArea = styled.div`
  max-width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonUser = styled.button`
  width: 190px;
  height: 50px;
  background: #d998e3;
  outline: 0;
  border: 0;
  color: #fff;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin: 0 10px 0 0;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
`;
