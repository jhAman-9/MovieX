import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const useSignOut =  () => {
  const navigate = useNavigate();
    const handleSignOut = async () => {
      await signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          navigate("/error");
        });
    };
    return handleSignOut
};

export default useSignOut