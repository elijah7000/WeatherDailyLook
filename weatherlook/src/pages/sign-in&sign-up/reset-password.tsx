import { useForm } from "react-hook-form";
import * as S from "../../components/sign-in&sign-up/login-and-create";
import styled from "styled-components";
import { type } from "os";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../components/sign-in&sign-up/FirebaseConfig";
import { FirebaseError } from "firebase/app";

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: fill;
`;

const SubColumn = styled.div`
  width: 370px;
  &:first-child {
    margin-bottom: 30px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`;

const Resettitle = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Subtitle = styled.span`
  opacity: 0.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-width: 0 0 1px;
  margin-bottom: 20px;
  font-size: 18px;
  &:last-child {
    border: 1px solid black;
    font-size: 20px;
    color: white;
    background-color: black;
    padding: 10px 10px;
    cursor: pointer;
  }
`;

const Introduce = styled.span`
  font-size: 45px;
  color: #dfe6e9;
  position: absolute;
  bottom: 100px;
  width: 100%;
  font-family: "Roboto Slab", serif;
  text-align: center;
`;

const Message = styled.span`
  display: flex;
  justify-content: center;
  align-items: cneter;
  color: red;
  margin-bottom: 10px;
`;

const BacktoLogin = styled.span``;

interface IForm {
  email: string;
}

export default function ResetPasword() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<IForm>();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data: IForm) => {
    const email = data.email;
    if (email === "") return;
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      let message = "Please check your email and login";
      setMessage(message);
    } catch (error) {
      if (error instanceof FirebaseError) {
        let errorMessage = "An error occurred. Please try again later.";
        setMessage(error.message);
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Invalid email please try again";
            break;
        }
        setMessage(errorMessage);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <S.Wrapper>
      <S.Column>
        <Background src="/images/resetpassword.jpeg" />
        <Introduce>
          Your daily weather, your daily look. Dress for the forecast, shop for
          the weather – all in one place
        </Introduce>
      </S.Column>
      <S.Column>
        <SubColumn>
          <S.LoginHeader>
            <Resettitle>Forgot password?</Resettitle>
            <Subtitle>No worries, we'll send you reset instructions</Subtitle>
          </S.LoginHeader>
        </SubColumn>
        <SubColumn>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
            />
            <Input
              type="submit"
              value={loading ? "Loading..." : "Reset Password"}
            ></Input>
          </Form>
        </SubColumn>
        <Message>{message}</Message>
        <SubColumn>
          <Link to="/login">
            <GoArrowLeft />
            <BacktoLogin>Back to log in</BacktoLogin>
          </Link>
        </SubColumn>
      </S.Column>
    </S.Wrapper>
  );
}
