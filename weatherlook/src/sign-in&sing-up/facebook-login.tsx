import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import * as S from "./login-and-create";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function FacebookLogin() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.SNSLogInButton onClick={onClick}>
      <BsFacebook className="Icon" />
      Sign in with Facebook
    </S.SNSLogInButton>
  );
}
