import { useForm } from "react-hook-form";
import * as S from "./login-and-create";
import styled from "styled-components";
import { type } from "os";

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: fill;
`;

const Subtitle = styled.span``;

const Form = styled.form``;

const Input = styled.input``;

const BacktoLogin = styled.span``;
export default function ResetPasword() {
  const { register, handleSubmit } = useForm();
  return (
    <S.Wrapper>
      <S.Column>
        <Background src="/images/resetpassword.jpeg" />
      </S.Column>
      <S.Column>
        <S.SubColumn>
          <S.LoginHeader>
            <S.LoginTitle>Forgot Password?</S.LoginTitle>
            <Subtitle>No worries, we'll send you reset instructions</Subtitle>
          </S.LoginHeader>
        </S.SubColumn>
        <S.SubColumn>
          <Form>
            <Input {...register("email")} type="email" />
            <Input type="submit"></Input>
          </Form>
        </S.SubColumn>
        <S.SubColumn>
          <BacktoLogin>Back to log in</BacktoLogin>
        </S.SubColumn>
      </S.Column>
    </S.Wrapper>
  );
}
