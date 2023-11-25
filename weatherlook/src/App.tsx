import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./Layout";
import Login from "./pages/sign-in&sign-up/login";
import CreateAccount from "./pages/sign-in&sign-up/create-account";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/sign-in&sign-up/loading-screen";
import { auth } from "./FirebaseConfig";
import ResetPasword from "./pages/sign-in&sign-up/reset-password";
import Men from "./pages/men/men";
import Women from "./pages/women/women";
import Sale from "./pages/sale/sale";
import NewIn from "./pages/newin/new-in";
import UserInfo from "./pages/userInfo/user-setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/newin",
        element: <NewIn />,
      },
      {
        path: "/userinfo",
        element: <UserInfo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/reset-password",
    element: <ResetPasword />,
  },
]);

const Globalstyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    background-color: white;
    color:black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
  }
`;

const Wrapper = styled.div``;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Globalstyles />
      <Wrapper>
        {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      </Wrapper>
    </>
  );
}

export default App;
