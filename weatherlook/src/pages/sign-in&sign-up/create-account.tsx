import { set, useForm } from "react-hook-form";
import * as S from "../../components/sign-in&sign-up/login-and-create";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../components/sign-in&sign-up/FirebaseConfig";
import { FirebaseError } from "firebase/app";
import GoogleLogin from "../../components/sign-in&sign-up/google-login";
import FacebookLogin from "../../components/sign-in&sign-up/facebook-login";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export default function CreateAccount() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      email: "@gmail.com",
    },
  });
  const onSubmit = async (data: IFormInput) => {
    const email = data.email;
    const password = data.password;
    const username = data.name;
    setError("");
    if (loading || username === "" || email === "" || password === "") return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: username,
      });
      navigate("/login");
    } catch (e) {
      if (e instanceof FirebaseError) {
        let errorMessage = "An error occurred. Please try again later.";
        switch (e.code) {
          case "auth/email-already-in-use":
            errorMessage = "This email is already in use";
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

  return (
    <S.Wrapper>
      <S.Column>
        <S.Background autoPlay loop muted>
          <source src="/videos/bridge.mp4" type="video/mp4" />
        </S.Background>
        <S.Title>Sign Up</S.Title>
        <S.SubTitle>
          Where Style Meets Forecast – Sign Up and Stay Fashionably Informed
        </S.SubTitle>
        <S.YesAccount>Already have an account?</S.YesAccount>
        <S.SignIn>
          <Link to="/login">Sign In</Link>
        </S.SignIn>
      </S.Column>
      <S.Column>
        <S.SubColumn>
          <S.LoginHeader>
            <S.LoginTitle>Join Now</S.LoginTitle>
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
            <S.InputTitle htmlFor="name">UserName</S.InputTitle>
            <S.InputBox
              {...register("name", { required: true })}
              type="text"
            ></S.InputBox>
            <S.InputTitle htmlFor="email">Email</S.InputTitle>
            <S.InputBox
              {...register("email", { required: true })}
              type="email"
            ></S.InputBox>
            <S.InputTitle htmlFor="password">Password</S.InputTitle>
            <S.InputBox
              {...register("password", {
                required: true,
              })}
              type="password"
            ></S.InputBox>
            <S.InputBox
              type="submit"
              value={loading ? "Loading..." : "Sign Up"}
              style={{ marginTop: 10 }}
            ></S.InputBox>
          </S.LoginForm>
          <S.ErrorMsg>{error}</S.ErrorMsg>
        </S.SubColumn>
      </S.Column>
    </S.Wrapper>
  );
}
