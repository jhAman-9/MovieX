import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import "./style.scss";
import { auth } from "../../utils/firebase";
import { checkValidData } from "../../utils/validateFormData";
import { userAvater } from "../../utils/constants";
import { addUser } from "../../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true); // sign in sign up form change
  const [errorMess, setErrorMess] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const mess = checkValidData(email.current.value, password.current.value);
    setErrorMess(mess);

    // mess !== null means some error in login data validation return;
    if (mess !== null) return;

    if (!isSignIn) {
      // create a new user (sign un)

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvater,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser ({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
               console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMess(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMess(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="main">
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <h1 className="login-title">{isSignIn ? "Sign In" : "Sign Up"}</h1>

          {!isSignIn && (
            <input
              ref={name}
              className="login-input"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="login-input"
            type="text"
            placeholder="Email address"
          />

          <input
            ref={password}
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <p className="error-message">{errorMess}</p>

          <button className="login-button" onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="toggle-form" onClick={handleSignInForm}>
            {isSignIn
              ? "New to Movix? Sign Up Now"
              : "Have an Account? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
