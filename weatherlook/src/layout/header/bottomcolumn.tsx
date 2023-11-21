import { Link } from "react-router-dom";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin-top: 15px;
`;

const MenuList = styled.li`
  font-size: 23px;
  font-weight: 600;
  cursor: pointer;
  &:first-child {
    color: red;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function HeaderBottomColumn() {
  return (
    <Column>
      <Menu>
        <MenuList>
          <Link to="/sale">Sale</Link>
        </MenuList>
        <MenuList>
          <Link to="/men">Men</Link>
        </MenuList>
        <MenuList>
          <Link to="/women">Women</Link>
        </MenuList>
        <MenuList>
          <Link to="/newin">New in</Link>
        </MenuList>
      </Menu>
    </Column>
  );
}
