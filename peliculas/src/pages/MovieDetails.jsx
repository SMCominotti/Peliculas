import React, { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { movieId } = useParams;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <div>
      <img src={}/>
    </div>
  );
};
