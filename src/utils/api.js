import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWYwOWE2MDUxM2RlN2Q3YTMyZDFkMjA4ZDNjY2E5OCIsInN1YiI6IjY2MTc4NWRkOTBiODdlMDE3YzNkOWE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NeAxYkTZ1Ocd5V1fOmrkPYSGCHEdF1OHPJIPwF_KggM";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log("Error :: fetchDataFromApi :: ", error.message);
  }
};
