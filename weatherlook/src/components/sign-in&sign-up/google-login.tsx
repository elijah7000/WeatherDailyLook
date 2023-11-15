import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import * as S from "./login-and-create";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.SNSLogInButton onClick={onClick}>
      <FcGoogle className="Icon" />
      Sign in with Google
    </S.SNSLogInButton>
  );
}
