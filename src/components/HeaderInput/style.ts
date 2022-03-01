import styled from "styled-components";

export const Head = styled.div`
  max-width: 590px;
  margin: 80px auto 0;
  line-height: 2px;
`;
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
`;
export const SubTitle = styled.p``;
export const InputArea = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 790px;
  border-radius: 6px;
  align-items: center;
  border: 1px solid #e9e9e9;
  background: #f9f9f9;
  height: 60px;
`;

export const Input = styled.input`
  width: 60%;
  margin: 0 0 0 10px;
  height: 40px;
  outline: 0;
  font-family: "Montserrat", sans-serif;
  border-radius: 6px;
  border: inherit;
  padding: 0 0 0 10px;
`;

export const Button = styled.button`
  margin: 0 0 0 20px;
  width: 160px;
  height: 100%;
  background-color: #d998e3;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
`;
