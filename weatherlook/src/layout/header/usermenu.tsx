import { useState } from "react";
import styled from "styled-components";
import { auth } from "../../FirebaseConfig";
import { FaRegUserCircle } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  .icon {
    cursor: pointer;
  }
`;

const UserMenuContainer = styled(motion.ul)`
  position: absolute;
  transform: translateX(-80px);
  background-color: white;
  border-radius: 10px;
  padding: 0px 30px 30px 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.li`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

const UserMenuList = styled.li`
  margin-top: 30px;
  cursor: pointer;
`;

const menulist: Variants = {
  start: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
  mid: {
    x: -80,
    opacity: 1,
    scale: 1,
  },
  end: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function UserMenu() {
  const [click, setClick] = useState(false);
  const userClick = () => {
    setClick((e) => !e);
  };
  const currentUser = auth.currentUser;
  return (
    <Wrapper>
      <FaRegUserCircle className="icon" onClick={userClick} />
      {click ? (
        <UserMenuContainer
          variants={menulist}
          initial="start"
          animate="mid"
          exit="end"
        >
          <UserName>
            {currentUser?.displayName
              ? "Hello " + currentUser?.displayName
              : "Guest"}
          </UserName>
          <UserMenuList>
            <Link to="/userinfo">My Info</Link>
          </UserMenuList>
          <UserMenuList>My Order</UserMenuList>
          <UserMenuList>My Point</UserMenuList>
          <UserMenuList>Setting</UserMenuList>
          <UserMenuList>Contact Us</UserMenuList>
        </UserMenuContainer>
      ) : null}
    </Wrapper>
  );
}
