import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

const useData = (endpoint, reqConfig = null, deps = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get(endpoint, { signal: controller.signal, ...reqConfig })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );
  return { data, error, loading };
};

export default useData;
