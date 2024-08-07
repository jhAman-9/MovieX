import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import useSignOut from "../../hooks/useSignOut";
import useOnAuthSignInSignUp from "../../hooks/useOnAuthSignInSignUp";
import { toggleUser } from "../../store/loginSlice";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.user);

  const { showLogin } = useSelector((store) => store.login);

  const dispatch = useDispatch();


  const handleSignInClick = () => {
    dispatch(toggleUser());
  }


  // page change then scroll start from 0
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  // when user click on sign out
  const handleSignOut = useSignOut();

  // when user sign in and sign, it will check auth the login or sign up (read firebase DOCS "onAuthStateChanged")
  useOnAuthSignInSignUp();
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        {user && <div className="logo" onClick={() => navigate("/home")}>
          <img src={logo} alt="" />
        </div>}
        {!user && (
          <>
            <div className="logo" onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </div>
            <p className="text">Welcome ! To the World Of Entertainment.</p>
          </>
        )}
        {user ? (
          <ul className="menuItems">
            <li className="menuItem" onClick={() => navigationHandler("movie")}>
              Movies
            </li>
            <li className="menuItem" onClick={() => navigationHandler("tv")}>
              Tv Shows
            </li>
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>
        ) : (
          <div className="toggle">
            <button className="login-button" onClick={handleSignInClick}>
              {showLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>
        )}

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}

      {user && (
        <div className="avatar">
          <img className="rounded-xl m-2" alt="userIcon" src={user?.photoURL} />
          <button
            className="sign-out font-bold text-white m-2"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
