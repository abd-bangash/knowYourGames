import React, { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);
  return { games, error, loading };
};

export default useGames;
