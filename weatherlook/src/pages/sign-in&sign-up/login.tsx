import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as S from "../../components/sign-in&sign-up/login-and-create";
import { useState } from "react";
import { auth } from "../../components/sign-in&sign-up/FirebaseConfig";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import GoogleLogin from "../../components/sign-in&sign-up/google-login";
import FacebookLogin from "../../components/sign-in&sign-up/facebook-login";

interface IFormInput {
  email: string;
  password: string;
}

//나중에 이미 구글 계정이나 페이스북계정이 존재 할시 pop창이 안뜨고 바로 home화면으로 이동할수 있도록 바꿔야됨

export default function Login() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data: IFormInput) => {
    const email = data.email;
    const password = data.password;
    setError("");
    if (loading || email === "" || password === "") return;
    try {
      setLoading(true);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        let errorMessage = "Error!";
        switch (e.code) {
          case "auth/invalid-login-credentials":
            errorMessage = "wrong password!";
            break;
        }
        setError(errorMessage);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  const resetPassword = async (data: IFormInput) => {};
  return (
    <S.Wrapper>
      <S.Column>
        <S.Background autoPlay loop muted>
          <source src="/videos/Cityscape.mp4" type="video/mp4"></source>
        </S.Background>
        <S.Title>WeatherDailyLook</S.Title>
        <S.SubTitle>Discover Your Perfect Outfit for Every Forecast</S.SubTitle>
      </S.Column>
      <S.Column>
        <S.SubColumn>
          <S.LoginHeader>
            <S.LoginTitle>Login to your account</S.LoginTitle>
            <S.SignUp>
              Don't have an account?
              <Link to="/create-account">Sign Up</Link>
            </S.SignUp>
          </S.LoginHeader>
          <S.SNSLogIn>
            <GoogleLogin />
            <FacebookLogin />
          </S.SNSLogIn>
        </S.SubColumn>
        <S.SubColumn>
          <S.Or>OR</S.Or>
        </S.SubColumn>
        <S.SubColumn>
          <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <S.InputTitle>Email</S.InputTitle>
            <S.InputBox
              {...register("email", { required: true })}
              type="email"
            ></S.InputBox>
            <S.InputPasswordHeader>
              <S.InputTitle>Password</S.InputTitle>
              <S.ForgotPassword>
                <Link to="/reset-password">Forgot Password?</Link>
              </S.ForgotPassword>
            </S.InputPasswordHeader>
            <S.InputBox
              {...register("password", { required: true })}
              type="password"
            ></S.InputBox>
            {/* <S.CheckBox>
              <S.InputBox
                {...register("rememberMe", { required: true })}
                type="checkbox"
                id="check"
              ></S.InputBox>
              <label htmlFor="checkbox">Remember me</label>
            </S.CheckBox> */}
            <S.InputBox
              type="submit"
              value={loading ? "Loading..." : "Login"}
            ></S.InputBox>
          </S.LoginForm>
          <S.ErrorMsg>{error}</S.ErrorMsg>
        </S.SubColumn>
      </S.Column>
    </S.Wrapper>
  );
}
