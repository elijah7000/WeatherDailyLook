import { Outlet } from "react-router-dom";
import HomeHeader from "./layout/header/header";
import Footer from "./layout/footer/footer";

export default function LayOut() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
}
