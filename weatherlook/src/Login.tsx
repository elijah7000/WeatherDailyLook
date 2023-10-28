import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { type } from "os";

const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 4.5fr 5fr;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 50px;
`;

const SubTitle = styled.h3`
  font-size: 25px;
`;

const SubColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 370px;
`;

const LoginHeader = styled.div``;

const LoginTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 15px;
`;

const SignUp = styled.span`
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

const SNSLogIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const SNSLogInButton = styled.button`
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

const Or = styled.span`
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

const LoginForm = styled.form`
  width: 370px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child {
    flex-direction: row;
  }
`;

const InputPasswordHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputBox = styled.input`
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  &:nth-child(4) {
    background-color: black;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
`;

const InputTitle = styled.span`
  margin-bottom: 5px;
`;

const HelpLogIn = styled.div``;

const RememberMe = styled.span``;

const ForgotPassword = styled.span`
  font-size: 13xpx;
  opacity: 0.5;
`;

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <Wrapper>
      <Column>
        <Title>WeatherDailyLook</Title>
        <SubTitle>Discover Your Perfect Outfit for Every Forecast</SubTitle>
      </Column>
      <Column>
        <SubColumn>
          <LoginHeader>
            <LoginTitle>Login to your account</LoginTitle>
            <SignUp>
              Don't have an account?
              <Link to={""}>Sign Up</Link>
            </SignUp>
          </LoginHeader>
          <SNSLogIn>
            <SNSLogInButton>
              <FcGoogle className="Icon" />
              Sign in with Google
            </SNSLogInButton>
            <SNSLogInButton>
              <BsFacebook className="Icon" />
              Sign in with FaceBook
            </SNSLogInButton>
          </SNSLogIn>
        </SubColumn>
        <SubColumn>
          <Or>OR</Or>
        </SubColumn>
        <SubColumn>
          <LoginForm>
            <InputContainer>
              <InputTitle>Email</InputTitle>
              <InputBox {...register("Email")} type="email"></InputBox>
            </InputContainer>
            <InputContainer>
              <InputPasswordHeader>
                <InputTitle>PassWord</InputTitle>
                <ForgotPassword>Forgot Password?</ForgotPassword>
              </InputPasswordHeader>
              <InputBox {...register("Password")} type="password"></InputBox>
            </InputContainer>
            <CheckBox>
              <InputBox
                {...register("RememberMe")}
                type="checkbox"
                id="check"
              ></InputBox>
              <label htmlFor="checkbox">Remember me</label>
            </CheckBox>
            <InputBox type="submit" value="Login"></InputBox>
          </LoginForm>
        </SubColumn>
      </Column>
    </Wrapper>
  );
}
