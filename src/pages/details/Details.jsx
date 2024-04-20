// ??????

import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";


const Details = () => {
    const { mediaType } = useParams();

  const {id } = useParams();

 const { data, loading } = useFetch(`/${"movie"}/${id}/videos`);
 const { data: credits, loading: creditsLoading } = useFetch(
   `/${"movie"}/${id}/credits`
 );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={"movie"} id={id} />
      <Recommendation mediaType={"movie"} id={id} />
    </div>
  );
};

export default Details;

