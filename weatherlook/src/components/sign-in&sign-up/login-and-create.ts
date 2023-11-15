import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 5.5fr 5fr;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:first-child {
    color: white;
    background-color: black;
    height: 100%;
    flex-direction: column;
  }
  &:last-child {
    color: black;
    background-color: white;
    flex-direction: column;
    height: 100%;
  }
`;

export const Background = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: fill;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 150px;
  position: absolute;
`;

export const SubTitle = styled.h3`
  font-size: 30px;

  position: absolute;
`;

export const SubColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 370px;
`;

export const LoginHeader = styled.div``;

export const LoginTitle = styled.h1`
  font-size: 39px;
  margin-bottom: 15px;
`;

export const SignUp = styled.span`
  font-size: 15px;

  color: rgba(0, 0, 0, 0.7);
  a {
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    font-weight: 600;
    text-decoration: none;
    margin-left: 4px;
  }
`;

export const SNSLogIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const SNSLogInButton = styled.button`
  padding: 10px 15px;
  width: 370px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px groove rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
  &:first-child {
    margin-bottom: 15px;
  }
  .Icon {
    font-size: 30px;
    margin-right: 7px;
  }
`;

export const Or = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  margin: 30px 0px;
  &::before {
    content: "";
    flex-grow: 1;
    background-color: black;
    height: 1px;
    margin-right: 8px;
  }
  &::after {
    content: "";
    flex-grow: 1;
    background-color: black;
    height: 1px;
    margin-left: 8px;
  }
`;

export const LoginForm = styled.form`
  width: 370px;
  display: flex;
  flex-direction: column;
`;

export const InputPasswordHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InputBox = styled.input`
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  &:last-child {
    background-color: black;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
`;

export const InputTitle = styled.label`
  margin-bottom: 5px;
`;

export const ForgotPassword = styled.span`
  font-size: 13xpx;
  opacity: 0.5;
  a {
    color: black;
    text-decoration: none;
  }
`;

export const YesAccount = styled.div`
  font-size: 25px;
  margin-top: 130px;
  position: absolute;
`;

export const SignIn = styled.button`
  padding: 20px 50px;
  position: absolute;
  background-color: transparent;
  margin-top: 300px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  border: 5px solid white;
  border-radius: 10px;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;

export const ErrorMsg = styled.span`
  color: #d63031;
`;
