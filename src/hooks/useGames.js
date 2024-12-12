import React, { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { games, error };
};

export default useGames;
