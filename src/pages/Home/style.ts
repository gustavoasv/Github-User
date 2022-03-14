import styled from "styled-components";

export const Main = styled.div`
  max-width: 580px;
  margin: 35px auto;
  height: 450px;

  h1 {
    line-height: 1px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  max-width: 790px;
  border-radius: 6px;
  align-items: center;
  border: 1px solid #e9e9e9;
  background: #f9f9f9;
  height: 67px;
`;

export const Input = styled.input`
  margin: 0 0 0 10px;
  width: 420px;
  padding: 15px;
  outline: 0;
  border: 1px solid #e9e9e9;
`;
export const Button = styled.button`
  width: 220px;
  height: 100%;
  margin: 0 0 0 10px;
  cursor: pointer;
  background: #d998e3;
  border-radius: 9px;
  color: #fff;
  border: 0;
  outline: 0;
`;

export const Loader = styled.div`
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid #3498db; /* Blue */
  border-radius: 50%;
  position: relative;
  top: 20%;
  left: 260px;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Bio = styled.div`
  max-width: 80%;
  height: auto;
  padding: 5px;
  background-color: #fff;
  border-radius: 9px;
  position: relative;
  border: 1px solid #e9e9e9;
  top: 60px;
  margin: 0 auto;

  p {
    text-align: center;
  }
`;

export const Buttons = styled.div`
  max-width: 100%;
  /* height: 10px; */
  position: relative;
  top: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsArea = styled.div`
display: flex;
background-color: #FFF;
border-radius: 9px;
box-shadow: -1px 2px 31px -6px rgba(0,0,0,0.17);
cursor: pointer;

a{
  display: flex;
  text-decoration: none;
}
`

export const ButtonCount = styled.div`
 padding: 0 10px 0 10px;
`

export const ButtonContent = styled.div`
color: #FFF;
background-color: #d998e3;
width: 109px;
border-radius: 9px;
padding: 0 10px 0 10px;
text-align: center;
`