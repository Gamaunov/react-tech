import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";

const Login = () => {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    navigate('/')    
  }
  return (
    <div>
      <p>Sign with Google to cotinue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
