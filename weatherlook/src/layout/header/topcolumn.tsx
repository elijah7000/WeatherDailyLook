import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../components/sign-in&sign-up/FirebaseConfig";
import { Link } from "react-router-dom";

const Column = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TopColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  position: relative;
  &:first-child {
    .icon {
      position: relative;
      left: 40px;
      z-index: 1;
    }
  }
  &:last-child {
    .icon {
      margin-right: 20px;
    }
  }
  .icon {
    font-size: 30px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Search = styled.input`
  padding: 15px 40px;
  width: 50%;
  border: none;
  background-color: #dfe6e9;
  border-radius: 10px;
  position: relative;
  &::placeholder {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Sign = styled.button`
  border: none;
  background-color: inherit;
  font-size: 15px;
  cursor: pointer;
  a {
    color: black;
    text-decoration: none;
  }
`;

export default function HeaderTopColumn() {
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState(null);

  const signOutUser = async () => {
    try {
      setLogin((e) => !e);
      await signOut(auth);
    } catch (error) {
      //나중에 바꿔야됨
      console.error("Error signing out", error);
    }
  };
  return (
    <Column>
      <TopColumn>
        <HiMagnifyingGlass className="icon" />
        <Search type="text" placeholder="Search"></Search>
      </TopColumn>
      <TopColumn>
        <Link to="/">
          <Title>WeatherDailyLook</Title>
        </Link>
      </TopColumn>
      <TopColumn>
        <FaShoppingBasket className="icon" />
        <FaRegUserCircle className="icon" />
        {login ? (
          <Sign onClick={signOutUser}>Sing Out</Sign>
        ) : (
          <Sign>
            <Link to="/login">Sing in</Link>
          </Sign>
        )}
      </TopColumn>
    </Column>
  );
}
