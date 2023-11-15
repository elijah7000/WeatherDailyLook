import { Navigate } from "react-router-dom";
import { auth } from "./components/sign-in&sign-up/FirebaseConfig";

export default function Protected({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;
  if (user === null) {
    return (
      <>
        <Navigate to="login" />
      </>
    );
  }
  return <>{children}</>;
}
