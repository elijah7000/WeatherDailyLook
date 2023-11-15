import { Outlet } from "react-router-dom";
import HomeHeader from "./layout/header/header";

export default function LayOut() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}
