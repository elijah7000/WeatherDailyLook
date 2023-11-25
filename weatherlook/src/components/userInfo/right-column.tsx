import styled from "styled-components";
import RightColumnTop from "./right-column-top";
import { useForm, SubmitHandler } from "react-hook-form";
import { auth } from "../../FirebaseConfig";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const BottomColumn = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoInputTitle = styled.span`
  font-size: 25px;
  opacity: 0.7;
  margin-bottom: 10px;
`;

const UserInfoInput = styled.input`
  padding: 15px 35px;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgb(223, 230, 233, 0.3);
`;

const SubmitBtn = styled.input`
  padding: 15px 35px;
  border-radius: 10px;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #dfe6e9;
  }
`;

interface IForm {
  name: string | null | undefined;
  email: string | null | undefined;
  phone_number: string;
  address: string;
}

export default function RightColumn() {
  const currentUser = auth.currentUser;
  const curretName = currentUser?.displayName;
  const currentEmail = currentUser?.email;
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      name: curretName,
      email: currentEmail,
    },
  });

  return (
    <Wrapper>
      <RightColumnTop />
      <BottomColumn>
        <Form>
          <FormContainer>
            <UserList>
              <UserInfoInputTitle>Name</UserInfoInputTitle>
              <UserInfoInput {...register("name")}></UserInfoInput>
            </UserList>
            <UserList>
              <UserInfoInputTitle>Email</UserInfoInputTitle>
              <UserInfoInput {...register("email")}></UserInfoInput>
            </UserList>
          </FormContainer>
          <FormContainer>
            <UserList>
              {" "}
              <UserInfoInputTitle>Phone Number</UserInfoInputTitle>
              <UserInfoInput {...register("phone_number")}></UserInfoInput>
            </UserList>
            <UserList>
              {" "}
              <UserInfoInputTitle>Address</UserInfoInputTitle>
              <UserInfoInput {...register("address")}></UserInfoInput>
            </UserList>
          </FormContainer>

          <SubmitBtn type="submit" value="Save Change"></SubmitBtn>
        </Form>
      </BottomColumn>
    </Wrapper>
  );
}
