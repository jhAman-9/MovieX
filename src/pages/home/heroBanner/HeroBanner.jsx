import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImages/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    event.preventDefault();
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        {loading == false && <Img src={backGround} />}
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <form className="searchInput" onSubmit={searchQueryHandler}
          >
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
