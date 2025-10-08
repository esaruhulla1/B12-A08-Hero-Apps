import axios from "axios";
import { useEffect, useState } from "react";

const useLoadData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios('../data.json')
      .then(res => {
        setAppData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Something went wrong!");
        setLoading(false);
      });
  }, []);

  return { appData, loading, error };
};

export default useLoadData;
