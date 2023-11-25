import styled from "styled-components";
import { FaRegUser, FaTruck } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserProfileMenu = styled.ul`
  transform: translateY(10%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const MenuList = styled.li`
  font-size: 20px;
  opacity: 0.5;
  color: black;
  margin-top: 30px;
  width: 200px;
  display: flex;
  cursor: pointer;
`;

const MenuListItem = styled.span`
  margin-left: 15px;
`;

export default function LeftColumn() {
  return (
    <Wrapper>
      <UserProfileMenu>
        <Title>User Profile</Title>
        <MenuList>
          <FaRegUser />
          <MenuListItem>My Info</MenuListItem>
        </MenuList>
        <MenuList>
          <FaTruck />
          <MenuListItem>My Order</MenuListItem>
        </MenuList>
        <MenuList>
          <TbPigMoney />
          <MenuListItem>My Point</MenuListItem>
        </MenuList>
        <MenuList>
          <FaGear />
          <MenuListItem>Setting</MenuListItem>
        </MenuList>
      </UserProfileMenu>
    </Wrapper>
  );
}
