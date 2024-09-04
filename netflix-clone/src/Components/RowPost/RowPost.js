import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
function RowPost({ url, title, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [url]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array Empty");
        }
      });
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
          key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt={obj.title || obj.name}
          />
        ))}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default RowPost;
