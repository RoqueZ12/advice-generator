import React, { useState, useEffect, useCallback } from "react";
import { getDataApi } from "../services/quote";

const userQuote = () => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback( async () => {
    try {
      const data = await getDataApi();
      setDataApi(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  });

  useEffect (()=>{
    fetchData()
  },[])
;
  
  return { apis: dataApi, isLoading, error, fetchData };
};

export { userQuote };