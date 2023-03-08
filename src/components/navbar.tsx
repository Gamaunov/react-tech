import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const sigUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        {!user ? (
          <Link className="link" to="/login">
            Login
          </Link>
        ) : (
          <Link className="link" to="/createpost">
            Create post
          </Link>
        )}
      </div>

      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              className="useer__photo"
              alt="It`s me"
            />
            <button onClick={sigUserOut}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
