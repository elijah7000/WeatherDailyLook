import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { Link } from "react-router-dom";
import App from "../../App";
import UserMenu from "./usermenu";

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
  font-weight: 600;
  a {
    color: black;
    text-decoration: none;
  }
`;

export default function HeaderTopColumn() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const signOutUser = async () => {
    try {
      await signOut(auth);
      setLogin((prevLogin) => !prevLogin);
    } catch (error) {
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
        <UserMenu />
        {login ? (
          <Sign>
            <Link to="/login">Sign in</Link>
          </Sign>
        ) : (
          <Sign onClick={signOutUser}>Sign Out</Sign>
        )}
      </TopColumn>
    </Column>
  );
}
