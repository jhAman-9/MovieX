import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const useOnAuthSignInSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return useEffect(() => {
       const unsubscriber = onAuthStateChanged(auth, (user) => {
         if (user) {
           console.log(user);
           // user sign in
           const { uid, email, displayName, photoURL } = user;
           dispatch(addUser({ uid, email, displayName, photoURL }));
           navigate("/home");
         } else {
           // User is signed out
           dispatch(removeUser());
           navigate("/");
         }
       });
       return () => unsubscriber();
     }, []);   
}

export default useOnAuthSignInSignUp;