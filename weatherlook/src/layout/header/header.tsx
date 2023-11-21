import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { log } from "console";
import { auth } from "../../components/sign-in&sign-up/FirebaseConfig";
import HeaderTopColumn from "./topcolumn";
import HeaderBottomColumn from "./bottomcolumn";

const Header = styled.header`
  width: 100%;
  height: 150px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export default function HomeHeader() {
  return (
    <Header>
      <HeaderTopColumn />
      <HeaderBottomColumn />
    </Header>
  );
}
