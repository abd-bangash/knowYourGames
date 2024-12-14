import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { genres, error, loading };
};

export default useGenres;
