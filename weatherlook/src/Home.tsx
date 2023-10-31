import styled from "styled-components";
import { auth } from "./sign-in&sing-up/FirebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export default function Home() {
  const navigate = useNavigate();
  const onClick = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <Wrapper>
      <h1>Home</h1>
      <button onClick={onClick}>logout</button>
    </Wrapper>
  );
}
